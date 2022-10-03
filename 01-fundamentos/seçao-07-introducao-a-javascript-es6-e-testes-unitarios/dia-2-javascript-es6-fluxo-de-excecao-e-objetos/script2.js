const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (object, key, value) => { // exercício 1 - parte 3
  object[key] = value;
};

addKey(lesson2, 'turno', 'noite');
console.log(lesson2);

const listKeys = (object) => Object.keys(object) // exercício 2 - parte 3
console.log(listKeys(lesson1));

const objectSize = (object) => Object.keys(object).length; // exercício 3 - parte 3
console.log(objectSize(lesson1));

const listValues = (object) => Object.values(object) // exercício 4 - parte 3
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 }); // exercicio 5 - parte 3
console.log(allLessons);

const getNumberOfStudents = (object) => { // exercicio 6 - parte 3
let total = 0;
const array = Object.keys(object);
for (index in array) {
  total += object[array[index]].numeroEstudantes;
}
return total;
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (object,number) => Object.values(object)[number]; // exercicio 7 - parte 3
console.log(getValueByNumber(lesson1, 0));

const checkPair = (object, key, value) => { // exercicio 8 - parte 3
  const stores = Object.entries(object);
  let stock = false;
  for (let index in stores) {
    if (stores[index][0] === key && stores[index][1] === value) stock = true;
  }
  return stock;
};
console.log(checkPair(lesson3,'professor','Carlos'));
console.log(checkPair(lesson3,'professor','Maria Clara'));