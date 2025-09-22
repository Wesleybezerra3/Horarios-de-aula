const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static associate(models) {
    Professor.belongsTo(models.Department, { foreignKey: 'department_id' });
    Professor.belongsTo(models.Title, { foreignKey: 'title_id' });
    Professor.hasMany(models.Subject, { foreignKey: 'taught_by' });
  }
}

module.exports = (sequelize) => {
  Professor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    department_id: DataTypes.INTEGER,
    title_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Professor',
    tableName: 'PROFESSOR',
    timestamps: false
  });

  return Professor;
};
