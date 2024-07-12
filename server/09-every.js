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

const rta3 = team.every(member => member.age < 18) ;
console.log('rta3', rta3);

