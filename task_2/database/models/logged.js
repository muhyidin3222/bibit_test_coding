"use strict";

const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  const logged = sequelize.define(
    "logged",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      dateTime: DataTypes.STRING,
      endpoint: DataTypes.STRING,
      parameters: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate (param, option) {
          const dateNow = moment().format("YYYY-MM-DD HH:mm:ss")
          param.dateTime = dateNow
        },
      },
      indexes: [],
    }
  );
  logged.associate = function (models) { };
  return logged;
};