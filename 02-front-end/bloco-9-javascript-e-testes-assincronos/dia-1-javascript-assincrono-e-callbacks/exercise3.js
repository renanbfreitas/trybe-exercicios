const getPlanet = () => {
  const mars = {
    name: 'Marte',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => console.log('Planeta retornado: ', mars.name), 4000);
};

getPlanet(); // Imprime Marte depois de 4 segundos