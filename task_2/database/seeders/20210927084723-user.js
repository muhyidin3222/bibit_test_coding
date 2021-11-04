'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('corporate_configs',
      [
        {
          "id": 1,
          "domicile": "Jakarta & Kab.Tangerang",
          "office_type": "PT (Perseroan Terbatas)",
          "name_store_type": "Virtual Office",
          "price": 8500000,
          "created_at": "2021-08-31 13:29:24",
          "updated_at": "2021-08-31 13:29:24"
        },
      ]
      , {});
  },
  down: (queryInterface, Sequelize) => {
  }
};