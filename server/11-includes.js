const pets = ['cat', 'dog', 'bat'];

let includeInArray = false; // con esto se dice que la variable no va a ser encontrada a menos que despues de hacer la iteracion se encuentre
for (let index = 0; index < pets.length; index++) {
    const element = pets [index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log ('for', includeInArray);
// con el metodo includes

const rta = pets.includes('dog')
console.log ('includes', rta);


//reto  retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.
const inputArray = ["ana", "santi", "nico", "anastasia"];
function filterByTerm(array, term) { //esta funcion toma dos parametros(array: el array de string) y (term: el termino de busqueda)
    return array.filter(word => word.includes(term)); //filter : itera sobre cada elemento del array //La función de callback word => word.includes(term) comprueba si cada word incluye el term.
  }
  const searchTerm = "ana"; // devuelve un array con las palbras que contienen el termino de búsqueda
  
  const result = filterByTerm(inputArray, searchTerm);
  console.log(result); 
  