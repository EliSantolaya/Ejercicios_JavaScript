//Ejercicio 7: Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
//La fundación debe tener dos parámetros:
// --- Primer parámetro es un objeto con x número de campos y valores
// --- Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

// Ejemplo de uso de la función:
// const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
// console.log(result); // {a: 1, c: 3}

function camposFalsy(obj, funcion) {
    const valorFalsy = [];
  
    for (let campo in obj) {
      if (!funcion(obj[campo])) {
        valorFalsy.push(campo);
      }
    }
  
    return valorFalsy;
  }


  //Ejemplo de uso

  function esPositivo(num){
    return num > 0;
  }

  const obj = {
    campo1: 10,
    campo2: -5,
    campo3: 2,
    campo4: 0
  };

  const camposFalsos = camposFalsy(obj, esPositivo);

  console.log(camposFalsos);