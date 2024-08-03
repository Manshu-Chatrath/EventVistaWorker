const express = require("express");
const dotenv = require("dotenv");
const Notification = require("./models/notification");
const Events = require("./models/events");
const Clients = require("./models/clients");
const Organizers = require("./models/organizers");
const bcrypt = require("bcrypt");
dotenv.config();

const { REDIS_HOST, REDIS_PORT } = process.env;
const Bull = require("bull");
const app = express();
app.use(express.json());
console.log(REDIS_HOST);
// Create a new queue
const notificationQueue = new Bull(
  "notificationQueue",
  `redis://${REDIS_HOST}:${REDIS_PORT}`
);
const eventQueue = new Bull(
  "eventQueue",
  `redis://${REDIS_HOST}:${REDIS_PORT}`
);

const userQueue = new Bull("userQueue", `redis://${REDIS_HOST}:${REDIS_PORT}`);

// Define a process function for the queue
notificationQueue.process(async (job) => {
  const { notificationIds } = job.data;
  try {
    await Notification.destroy({ where: { id: notificationIds } });
  } catch (e) {
    console.error(e);
  }
});

notificationQueue.on("failed", async (job, err) => {
  console.error("Job failed:", err);
  await job.retry();
});

userQueue.process(async (job) => {
  const { email, type, otp } = job.data;

  try {
    if (type === "client") {
      const client = await Clients.findOne({
        attributes: ["otp"],
        where: { email: email },
      });
      const isMatch = await bcrypt.compare(otp, client.otp);
      if (isMatch) {
        await Clients.update({ otp: null }, { where: { email: email } });
      }
    } else {
      const organizer = await Organizers.findOne({
        attributes: ["otp"],
        where: { email: email },
      });
      const isMatch = await bcrypt.compare(otp, organizer.otp);
      if (isMatch) {
        await Organizers.update({ otp: null }, { where: { email: email } });
      }
    }
  } catch (e) {
    console.error(e);
  }
});

userQueue.on("failed", async (job, err) => {
  console.error("Job failed:", err);
  await job.retry();
});

eventQueue.process(async (job) => {
  const { id, type } = job.data;
  const transaction = await sequelize.transaction();
  try {
    if (type === "removeNotifications") {
      await Notification.destroy({
        where: { eventId: id },
        transaction,
      });
    }
    if (type === "removeEvents") {
      await Events.destroy({ where: { id: id }, transaction });
    }
    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    console.error(e);
  }
});

eventQueue.on("failed", async (job, err) => {
  console.error("Job failed:", err);
  await job.retry();
});

app.listen(4002, () => {
  console.log("Worker listening on port 4002");
});
