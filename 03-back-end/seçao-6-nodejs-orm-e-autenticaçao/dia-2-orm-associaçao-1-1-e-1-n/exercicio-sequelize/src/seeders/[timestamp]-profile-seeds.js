module.exports = {
    async up(queryInterface, _Sequelize) {
      return queryInterface.bulkInsert('Profiles', 
      [
        { firstName: 'Elaine', lastName: 'Stevens', phone: '(116) 941 9747', accountId: 1 },
        { firstName: 'Margie', lastName: 'Chambers', phone: '(438) 738 2053', accountId: 2 },
        {
          firstName: 'Kurt',
          lastName: 'Wagner',
          phone: '(929) 344 7886',
          accountId: 3,
        },
        {
          firstName: 'Audrey',
          lastName: 'Medina',
          phone: '(146) 556 9633',
          accountId: 4,
        },
        { firstName: 'Jeffery', lastName: 'Matthews', phone: '(550) 891 9423', accountId: 5 },
      ]);
    },
  
    async down(queryInterface, _Sequelize) {
      return queryInterface.bulkDelete('Profiles', null, {});
    },
  };