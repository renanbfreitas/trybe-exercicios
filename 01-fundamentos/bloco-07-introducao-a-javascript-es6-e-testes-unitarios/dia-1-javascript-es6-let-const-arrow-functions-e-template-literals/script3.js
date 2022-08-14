const factorial = (number) => {
    let result = 1;
  
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
  
    return result;
  };
  
  const print = factorial(7); 
  
  console.log(`Esse é o fatorial ${print}`);