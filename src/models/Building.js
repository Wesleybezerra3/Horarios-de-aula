const { Model, DataTypes } = require('sequelize');

class Building extends Model {
  static associate(models) {
    Building.hasMany(models.Room, { foreignKey: 'building_id' });
  }
}

module.exports = (sequelize) => {
  Building.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Building',
    tableName: 'BUILDING',
    timestamps: false
  });

  return Building;
};
