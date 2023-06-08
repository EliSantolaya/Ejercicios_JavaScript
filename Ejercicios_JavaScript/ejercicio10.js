//Ejercicio 10: Crea una función que elimine las etiquetas html o xml de un string. La función debe tener un string como único parámetro.

// Ejemplo de uso de la función:
// const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
// console.log(result); // lorem ipsum


function eliminarEtiquetasHTML(string) {
    const regex = /<[^>]+>/ig;
    return string.replace(regex, '');
  }
 
  
const stringHTML = '<div><span>lorem</span> <strong>ipsum</strong></div>';
const resultado = eliminarEtiquetasHTML(stringHTML);
console.log(resultado);