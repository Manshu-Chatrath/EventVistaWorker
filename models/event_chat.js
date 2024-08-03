const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // replace with your Sequelize instance
const Events = require("./events"); // replace with your Events model
const EventChatMessages = require("./event_chat_messages"); // replace with your EventChatMessages model

const EventChat = sequelize.define(
  "EventChat",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "event_chat",
    timestamps: true,
  }
);

// Define associations
EventChat.belongsTo(Events, { foreignKey: "eventId", onDelete: "CASCADE" });
EventChat.hasMany(EventChatMessages, { foreignKey: "eventChatId" });

module.exports = EventChat;
