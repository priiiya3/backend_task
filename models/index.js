const sequelize = require('../db/connection');
const Sequelize = require('sequelize');


// Define models and their associations here
User = require('./user')(sequelize, Sequelize.DataTypes);
Question = require('./question')(sequelize, Sequelize.DataTypes);

const db = {
    User,
    Question,
    sequelize,
    Sequelize
  };

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
