//Ejercicio 2: Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

function cleanArray(arr){
    var newArray = [];

    for(var i=0; i<arr.length; i++){
        if(arr[i]){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

var arrClean = cleanArray(arrDirty);

console.log(arrClean);



