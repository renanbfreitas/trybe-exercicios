module.exports = {
    async up(queryInterface, Sequelize) {
      return queryInterface.createTable('Profiles', {
        id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        firstName: { allowNull: false, type: Sequelize.STRING },
        lastName: { allowNull: false, type: Sequelize.STRING },
        phone: { allowNull: true, type: Sequelize.STRING },
        accountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Accounts',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      });
    },
  
    async down(queryInterface, _Sequelize) {
      return queryInterface.dropTable('Profiles');
    },
  };