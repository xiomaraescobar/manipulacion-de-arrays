const totals = [1,2,3,4];// vamos a sumar este array de valores

let sum = 0;
for (let index = 0; index < totals.length; index++) {// asi seria de la forma tradicional con el for de siempre
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

// reduce: se deben enviar dos parametros en este caso es el arrow function (=>) el primer valor y el segundo es el estado inicial de sum (0)
const rta = totals.reduce((sum, element) => sum + element, 0)//constante con la respuesta tener en cuenta el primer valor es el acumulador (sum) luego va el element despues la funcion => despues se suma con el elemnto el estdo inicial seria el cero(0) //el primer parametro seria el arrow function y el segundo seria el cero
console.log('rta', rta);

const numbers = [1, 1, 1, 1];
const rta1 = numbers.reduce((num, element) => num + element, 0);
console.log('rta1', rta1);



