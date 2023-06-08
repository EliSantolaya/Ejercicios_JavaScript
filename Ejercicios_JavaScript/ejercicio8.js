//Ejercicio 8: Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
//La función debe tener 2 parámetros:
// --- Primer parámetro debe ser el número de bytes
// --- Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). 
//     Por defecto, este parámetro debe de tener un valor de 3.

// Ejemplo de uso de la función:
// const result = fromBytesToFormattedSizeUnits(1000);
// console.log(result); // 1KB
// const result = fromBytesToFormattedSizeUnits(123456789);
// console.log(result); // 123MB
// const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
// console.log(result); // -12.145GB


function fromBytesToFormattedSizeUnits(numBytes, numTruncar = 3) {
    const unidades = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let valor = Math.abs(numBytes);
    let unidadIndex = 0;
  
    while (valor >= 1024 && unidadIndex < unidades.length - 1) {
      valor /= 1024;
      unidadIndex++;
    }
  
    const signo = numBytes < 0 ? '-' : '';
    const resultado = valor.toFixed(numTruncar) + ' ' + unidades[unidadIndex];
    return signo + resultado;
  }
  

  const result1 = fromBytesToFormattedSizeUnits(1000);
  console.log(result1);
  
  const result2 = fromBytesToFormattedSizeUnits(123456789);
  console.log(result2);
  
  const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
  console.log(result3); 
  


