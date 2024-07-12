const numbers = [1,30,49,29,13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) { //si elemento es igual a 30
       rta = element; //la respuesta sera el elemnto
       break; // rompe cuando encuentra el elemnto en cuestion
    }
}
console.log('for', rta);

//  solucion con find
const rta2 = numbers.find(item => item ===30)
console.log('find', rta2);

// find hagamos la prueba con un array de objetos

const products = [
    {
        name: "pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burguer",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🧁'
    }, 
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);

//findIndex me devuelve la posicion en la que encuentra el objeto
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('find', rta4);
