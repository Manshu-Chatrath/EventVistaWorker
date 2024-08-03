const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // replace with your Sequelize instance
const Events = require("./events"); // replace with your Events model
const Clients_has_Events = require("./clients_has_events"); // replace with your Clients_has_Events model
const Clients = sequelize.define(
  "Clients",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUuid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "clients",
    timestamps: true,
  }
);

module.exports = Clients;
