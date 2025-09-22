const { Model, DataTypes } = require('sequelize');

class Class extends Model {
  static associate(models) {
    Class.belongsTo(models.Subject, { foreignKey: 'subject_id' });
    Class.hasMany(models.ClassSchedule, { foreignKey: 'class_id' });
  }
}

module.exports = (sequelize) => {
  Class.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject_id: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    semester: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
    tableName: 'CLASS',
    timestamps: false
  });

  return Class;
};
