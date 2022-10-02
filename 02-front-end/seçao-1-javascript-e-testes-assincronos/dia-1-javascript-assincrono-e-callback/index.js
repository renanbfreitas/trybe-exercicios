// callbacks-para-fixar-01.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser = (/* callback */) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  // Insira o retorno da função `getUser`
};

console.log(getUser()); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
console.log(getUser()); // Retorno esperado: "Ivan é Russo"
