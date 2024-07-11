const words = ['spray','limit','elite','exuberant']; //array de palabras

const newArray = []; //constante con nuevo array que se va a iniciar en 0 y solo los que cumplan con lo que vamos a pedir a continuacion haran parte de ese array
for (let index = 0; index < words.length; index++) { //vamos a hacer un filtro con la tecnica de (for)
    const item = words[index];
    if (item.length >= 6) { // aqui añadimos la condicion de incluir las palabras que tengan mayor o igual a  6 letras
        newArray.push(item);// si ese item cumple la condicion se haria un push es decir se haria parte de ese array
    }
}
console.log('newArray', newArray);//imprimir el nuevo array
console.log('original',words); // imprime el array original, revisamos que no sea mutado (cambiado)

//metodo propio de javascript para filtrar
const rta = words.filter(item => item.length >= 6);//aqui estamos haciendo lo mismo que con el for pero con una sola linea de codigo.
console.log('rta', rta);
console.log('original', words);

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
    },
    {
        customerName: 'Nicolas',
        total: 2000,
        delivered: false,
    },
];

const rta3 = orders.filter(item => item.delivered && item.total >= 100)// delivered hace referencia a un booleano y la condicional que queremos traer es un true o n false. y tambien debe sser mayor o igual a 100
console.log('rta3', rta3);

//realizando un buscador

const search = (query) => { // funcion declaramos la constante search(buscador) lo que vamos a a recibir es un query
    return orders.filter(item => { //nos va a retornar el array o numeros de compra que cumple con mi condicion 
        return item.customerName.includes(query); //esta linea quiere decir si un string esta incluido dentro de customerName o del atributo que se esta ejecutando .
    })
};
console.log(search('Nico'));