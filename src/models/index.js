const sequelize = require('../config/db');

// Importa todos os models
const models = {
  Department: require('./Department')(sequelize),
  Title: require('./Title')(sequelize),
  Professor: require('./Professor')(sequelize),
  Building: require('./Building')(sequelize),
  Room: require('./Room')(sequelize),
  Subject: require('./Subject')(sequelize),
  SubjectPrerequisite: require('./SubjectPrerequisite')(sequelize),
  Class: require('./Class')(sequelize),
  ClassSchedule: require('./ClassSchedule')(sequelize),
};

// Chama associate de cada model
Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});


module.exports = models;
