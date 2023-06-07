//Ejercicio 4: Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

function findInter(arr1, arr2, arr3){
    const intersection = [];

    for(let i=0; i<arr1; i++){
        const num = arr1[i];

        if(arr2.incluedes(num) && arr3.incluedes(num)){
            intersection.push(num);
        }
    }
    return intersection;
}

const intersection = findInter(arrNumber1, arrNumber2, arrNumber3);

console.log(intersection); 