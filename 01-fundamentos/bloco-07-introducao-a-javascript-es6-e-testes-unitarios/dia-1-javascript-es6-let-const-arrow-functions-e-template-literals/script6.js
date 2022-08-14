const minhasSkills = (func) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let resultado = `${func}
  
    Minhas três principais habilidades são:
    `;
    for (let index = 0; index < skills.length; index += 1) {
      resultado = `${resultado}
      - ${skills[index]}`; 
    }
    return resultado;
  };
  
  console.log(minhasSkills(('Renan')));