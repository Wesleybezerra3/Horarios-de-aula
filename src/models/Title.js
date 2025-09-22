const { Model, DataTypes } = require('sequelize');

class Title extends Model {
  static associate(models) {
    Title.hasMany(models.Professor, { foreignKey: 'title_id' });
  }
}

module.exports = (sequelize) => {
  Title.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Title',
    tableName: 'TITLE',
    timestamps: false
  });

  return Title;
};
