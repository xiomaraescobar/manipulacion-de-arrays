const letters = ['a', 'b', 'c'];

 const newArray = letters.map(item => item + '++'); //con map se logra la transformacion de un nuevo array sin modificar el array original.

/*const newArray = []; 
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}*/
console.log('original', letters);
console.log('new', newArray);



