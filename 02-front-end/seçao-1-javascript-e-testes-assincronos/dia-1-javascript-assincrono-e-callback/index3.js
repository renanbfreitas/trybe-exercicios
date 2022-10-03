const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    setTimeout(() => console.log('Planeta retornado: ', mars), 4000); // 1. Adiciona `setTimeout`
  };
  
  getPlanet(); // Imprime Marte depois de 4 segundos