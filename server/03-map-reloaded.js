const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName:'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName:'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName:'Valentina',
        total: 240,
        delivered: true,
    }
];
console.log('original', orders);//una lista de arrays
const rta = orders.map(item => item.total)
console.log('rta', rta); //esta es la respuesta en este caso los totales: esto nos puede servir para seleccionar elementos ejemplo seleccionar datos o limpiarlos sacar ponderados, mayor o menor etc se le pueden dar muchos usos es de los mas fuertes en map

/*const rta2 = orders.map((item) => { // estamos añadiendo un nuevo atributo que es el tax (impuesto), pero esto nos modifica el array original, vamos a hacerlo de otra forma
   item.tax = 0.19;
   return item;//el array fue modificado porque se esta copiando la ref en memoria y esta mutando el array original aunque map es inmutable este error puede pasar. 
});
console.log('rta2', rta2);
console.log('original', orders);*/

const rta3 = orders.map((item) => { //esta es la forma correcta de generar un nuevo atributo sin modificar el objeto original,
 
    return {
        ...item, // vamos a asegurar obtener un nuevo objeto con el sprit operate (..item) esto nos crea un nuevo objeto y no modificamos el objeto original
        tax: .19
     };
  });

  console.log('rta3', rta3);
console.log('original', orders);