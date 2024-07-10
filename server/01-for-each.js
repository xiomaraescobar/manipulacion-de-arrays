const letters = ['a', 'b', 'c'];
                                     //forEach sirve para hacer recorridos de los elementos de un array con diferentes tipos de datos ej string number boolean
for (let index = 0; index < letters.length; index++) {// forma basica de hacer un array con for
    const element = letters[index];
    console.log('for', element);
}

letters.forEach(item => console.log('forEach', item)) // resumiendo un array a una linea con forEach y around function(=>)
