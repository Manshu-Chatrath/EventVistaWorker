const sequelize = require("../database"); // Adjust to your actual sequelize instance path
const Clients = require("./clients");
const Events = require("./events");
const Clients_has_Events = require("./clients_has_events");

// Assuming sequelize is your Sequelize instance
const setupAssociations = () => {
  Clients.belongsToMany(Events, {
    through: Clients_has_Events,
    onDelete: "CASCADE",
  });
  Events.belongsToMany(Clients, {
    through: Clients_has_Events,
    onDelete: "CASCADE",
  });
  // Add other associations here
};

module.exports = setupAssociations;
