const { Model, DataTypes } = require('sequelize');

class SubjectPrerequisite extends Model {
  static associate(models) {
    SubjectPrerequisite.belongsTo(models.Subject, { as: 'Subject', foreignKey: 'subject_id' });
    SubjectPrerequisite.belongsTo(models.Subject, { as: 'Prerequisite', foreignKey: 'prerequisiteid' });
  }
}

module.exports = (sequelize) => {
  SubjectPrerequisite.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject_id: DataTypes.INTEGER,
    prerequisiteid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubjectPrerequisite',
    tableName: 'SUBJECT_PREREQUISITE',
    timestamps: false
  });

  return SubjectPrerequisite;
};
