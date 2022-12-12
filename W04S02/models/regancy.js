'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Regancy.belongsTo(models.Province)
      // define association here
    }
  }
  Regancy.init({
    province_id: DataTypes.STRING,
    name: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Regancy',
  });
  return Regancy;
};