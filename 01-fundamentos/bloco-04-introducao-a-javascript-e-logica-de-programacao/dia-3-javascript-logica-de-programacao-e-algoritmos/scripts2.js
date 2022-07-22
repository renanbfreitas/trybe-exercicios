let word = 'tryber';
let PalavraInversa = '';

for (let index = 0; index < word.length; index += 1) {
  PalavraInversa += word[word.length - 1 - index];
}

console.log(PalavraInversa);