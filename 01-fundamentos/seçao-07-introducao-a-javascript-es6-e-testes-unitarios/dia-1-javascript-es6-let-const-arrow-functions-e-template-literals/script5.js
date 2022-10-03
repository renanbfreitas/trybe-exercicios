const substituaX = (nome) => {
    const frase = 'Aprendendo desenvolvimento web!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
      if (fraseArray[index] === 'x') {
        fraseArray[index] = nome;
      }
    }  
    return fraseArray.join(' ');
  };
  
  console.log(substituaX('Renan'));