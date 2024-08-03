const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Notification = sequelize.define(
  "Notification",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    notificationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    notificationType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    receiverType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    senderType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "notifications",
    timestamps: true,
  }
);

module.exports = Notification;
