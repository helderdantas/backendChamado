'use strict';

const sequelize = require("sequelize");
// MIGRATION PARA CRIAR A TABELA NO BANCO DE DADOS
module.exports = {
 async up (queryInterface, Sequelize){
    await queryInterface.sequelize.query('CREATE SEQUENCE id_seq_equipesuport start 1 increment 1');
    await queryInterface.createTable('EquipeSuports', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoInclemente: true,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("nextval('id_seq_equipeSuport')"), //PARA CRIAR A SEQUENCIA DE ID NO BANCO POSTGRES
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize){
    await queryInterface.sequelize.query('CREATE SEQUENCE id_seq_equipesuport start 1 increment 1');
    await queryInterface.dropTable('EquipeSuports');

  }
};
