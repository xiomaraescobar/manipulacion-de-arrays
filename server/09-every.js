const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if ( element >= 40) {
        rta = false
    }
}

console.log('for', rta);

const rta2 = numbers.every(item => item <= 40) //con el metodo every
console.log('rta2', rta2);

//validar si todas las edades son menores de 18 años
const team = [
    {
        name: "Nicolas",
       age: 12,
    },
    {
        name: "Andrea",
        age: 15,
    },
    {
        name: "Zulema",
        age: 13,
    },
    {
        name: "Santiago",
        age: 10,
    },
    {
        name: "Valentina",
        age: 17,
    },
    {
        name: "Lucia",
        age: 29,
    },
];

const rta3 = team.every(member => member.age < 18) ; // verificando si todos los del grupo son menores de 18
console.log('rta3', rta3);

//verificar si todos los elemntos de este array son pares

function checkArray(numbers) {
    return numbers.every(number => number % 2 === 0);
  }
  
  const input1 = [2, 4, 6, 8, 10];
  const output1 = checkArray(input1);
  console.log(output1); 