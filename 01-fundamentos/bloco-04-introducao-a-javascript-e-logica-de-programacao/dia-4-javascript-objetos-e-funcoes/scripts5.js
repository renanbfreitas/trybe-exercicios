let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let propriedades in info) {
    if (
      propriedades === 'recorrente' &&
      info[propriedades] === 'Sim' &&
      info2[propriedades] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[propriedades] + ' e ' + info2[propriedades]);
    }
  }