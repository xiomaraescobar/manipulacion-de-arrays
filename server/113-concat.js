const elements = [1,1,2,2,];
const otherElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements [index];
    newArray.push(element);
}
// solucion con concat
const rta = elements.concat(otherElements);
console.log('for', newArray);
console.log('concat', rta);

 //otra forma de concatenar es con splite operator :tener cuidado con el split operator solo funciona bien con arrays
const rta2 = [...elements, ...otherElements];
console.log('...', rta2);

const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

//otra forma de concatenar

elements.push(...otherElements);
console.log ('elements', elements);