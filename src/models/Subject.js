const { Model, DataTypes } = require('sequelize');

class Subject extends Model {
  static associate(models) {
    Subject.belongsTo(models.Professor, { foreignKey: 'taught_by' });
    Subject.hasMany(models.SubjectPrerequisite, { foreignKey: 'subject_id' });
    Subject.hasMany(models.Class, { foreignKey: 'subject_id' });
  }
}

module.exports = (sequelize) => {
  Subject.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject_id: DataTypes.STRING,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    taught_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subject',
    tableName: 'SUBJECT',
    timestamps: false
  });

  return Subject;
};
