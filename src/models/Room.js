const { Model, DataTypes } = require('sequelize');

class Room extends Model {
  static associate(models) {
    Room.belongsTo(models.Building, { foreignKey: 'building_id' });
    Room.hasMany(models.ClassSchedule, { foreignKey: 'room_id' });
  }
}

module.exports = (sequelize) => {
  Room.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    building_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'ROOM',
    timestamps: false
  });

  return Room;
};
