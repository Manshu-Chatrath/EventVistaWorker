const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // Adjust this to your actual sequelize instance path
const Events = require("./events");
const Clients = require("./clients");
const Clients_has_Events = sequelize.define(
  "Clients_has_Events",
  {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Clients,
        key: "id",
      },
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Events,
        key: "id",
      },
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
    },
    isRemoved: {
      type: DataTypes.BOOLEAN,
    },
    isNotGoing: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "clients_has_events",
    timestamps: true,
  }
);

module.exports = Clients_has_Events;
