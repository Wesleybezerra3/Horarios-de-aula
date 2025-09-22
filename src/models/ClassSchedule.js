const { Model, DataTypes } = require('sequelize');

class ClassSchedule extends Model {
  static associate(models) {
    ClassSchedule.belongsTo(models.Class, { foreignKey: 'class_id' });
    ClassSchedule.belongsTo(models.Room, { foreignKey: 'room_id' });
  }
}

module.exports = (sequelize) => {
  ClassSchedule.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    class_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    day_of_week: DataTypes.STRING,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'ClassSchedule',
    tableName: 'CLASS_SCHEDULE',
    timestamps: false
  });

  return ClassSchedule;
};
