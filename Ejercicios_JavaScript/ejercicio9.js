//Ejercicio 9: Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
//La función debe tener un objeto como único parámetro.

// Ejemplo de uso de la función:
// const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
// const myObjLowercase = toLowercaseKeys(myObject);
// console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

function clavesLowerCase(objeto){
    const obj = {};

    for(let clave in obj){
        if(obj.hasOwnProperty(clave)){
            const claveLowerCase = clave.toLowerCase();
            obj[claveLowerCase] = obj[clave];
        }
    }
    return obj;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

const objC = clavesLowerCase(myObject);

console.log(objC);