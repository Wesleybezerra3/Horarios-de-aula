const { Model, DataTypes } = require('sequelize');

class Department extends Model {
  static associate(models) {
    Department.hasMany(models.Professor, { foreignKey: 'department_id' });
  }
}

module.exports = (sequelize) => {
  Department.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'DEPARTMENT',
    timestamps: false
  });

  return Department;
};
