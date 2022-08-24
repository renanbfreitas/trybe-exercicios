const numeroSorteado = (outroNumero, numero) => outroNumero === numero;

const sorteio = (outroNumero, callback) => {
  const numero = Math.floor((Math.random() * 5) + 1);

  return callback(outroNumero, numero) ? 'Parabeńs você ganhou!' : 'Tente novamente';
};

console.log(sorteio(3, numeroSorteado));