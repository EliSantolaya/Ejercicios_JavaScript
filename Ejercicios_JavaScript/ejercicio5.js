//Ejercicio 5: Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. 
//El valor de isSpain será un booleano indicando si es una ciudad de España.
//Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

function  dataChange(arr) {
    const newArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      const city = arr[i];
      
      if (city.country === 'Spain' && !city.capital) {
        newArray.push({ city: city.city, isSpain: true });
      } else {
        newArray.push({ city: city.city, isSpain: false });
      }
    }
    
    return newArray;
  }

  const newArray = dataChange(arrCities2);

  console.log(newArray);