const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // replace with your Sequelize instance

const Organizers = sequelize.define(
  "Organizers",
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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
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
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "organizers",
    timestamps: true,
  }
);

module.exports = Organizers;
