const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // replace with your Sequelize instance
const Organizers = require("./organizers"); // replace with your Organizers model
const Clients = require("./clients"); // replace with your Clients model
const Clients_has_Events = require("./clients_has_events"); // replace with your Clients_has_Events model

const Events = sequelize.define(
  "Events",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    organizerId: {
      type: DataTypes.INTEGER,
      references: {
        model: Organizers,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cancel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeZone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUuid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    participantLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    eventDate: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    tableName: "events",
    timestamps: true,
  }
);

// Define associations
Events.belongsTo(Organizers, {
  foreignKey: "organizerId",
  onDelete: "CASCADE",
});
Events.belongsToMany(Clients, {
  through: Clients_has_Events,
  onDelete: "CASCADE",
});

module.exports = Events;
