const sequelize = require('../db/connection');
const Sequelize = require('sequelize');

const db = {};

// Define models and their associations here
db.User = require('./user')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);

// Define associations if any
// db.User.hasMany(db.Question);
// db.Question.belongsTo(db.User);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
