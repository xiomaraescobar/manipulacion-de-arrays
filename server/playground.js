function addNewAttr(array) { //(ddNewAttr) imprime el array actualizadocon los nuevos atributos
    const taxRate = 0.19; //define tasa de impuesto (taxRate)

    return array.map(product => { //utilizamos el metodo map para iterar sobre cada objeto en el array
      const taxes = Math.floor(product.price * taxRate); //calculamosimpuesto para cada producto (usando 'math.floor)redondeamos el valor a entero
      return {
        ...product, //devuelve un nuevo objeto copiando las propiedades existentes y agrega la nueva propiedad (taxes)
        taxes: taxes
      };
    });
  }

  const products = [
    { name: 'soap 1', price: 1000, stock: 10 },
    { name: 'shampoo 2', price: 656, stock: 20 },
    { name: 'cream 3', price: 350, stock: 15 }
  ];

const updatedProducts = addNewAttr(products);
console.log(updatedProducts);