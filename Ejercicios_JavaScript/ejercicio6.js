//Ejercicio 6: Crea una función que redondee un número float a un número específico de decimales. La función debe tener dos parámetros: 
// --- Primer parámetro es un número float con x decimales
// --- Según parámetro es un int que indique el número de decimales al que redondear
// --- Evitar usar el método toFixed()

// Ejemplo de uso de la función:
//  const roundedResult = roundTo(2.123, 2);
//  console.log(roundedResult); // 2.12;
//  const roundedResult = roundTo(1.123456789, 6);
//  console.log(roundedResult); // 1.123457

function roundedResult(num, numDecimales){
    const factor = 10 ** numDecimales;
    return Math.round(num * factor) / factor;
}

const numero = 6.365478;
const numDecimales = 3;
const roundedResult = roundedResult (numero, numDecimales);

console.log(roundedResult);
