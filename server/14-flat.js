const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }  
}
console.log('for', newArray)

//otra forma de aplanar la matriz es con reduce


function flattenArray(arr) { //la funcion flattenArray es una funcion recursiva que toma un array y lo aplana a un solo nivel.
    return arr.reduce((acc, val) => { //reduce se utiliza para transformar el array arr. Comienza con un acumulador (acc) inicializado como un array vacio ([]).
        if (Array.isArray(val)) { // verifica si val es un array
            return acc.concat(flattenArray(val)); //Si val si es un array el resultado se concatena al acumulador (acc).
        } else {
            return acc.concat(val); //Si val no es un array, se concatena directamente al acumulador (acc).
        }
    }, []);
}

const newArray1 = flattenArray(matriz); // se llama a la funcion y se almacena el resultado

console.log(newArray1); // se imprime el nuevo array

//solucion con flat

const rta = matriz.flat(3);

console.log('flat', rta);