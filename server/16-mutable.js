const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-" .repeat(10));

//update

const productsV2 = [
    { title: "pizza", price: 121, id: "🍕"},
    { title: "Burger", price: 121, id: "🍔"},
    { title: "hot cakes", price: 121, id: "🥞"},
];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicious'
    } 
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productsV2] = {
    ...productsV2[productsV2],
    ...update.changes,
};
console.log(productsV2);

//solución  a los retos de la clase
const products2 = [
	{ title: 'Pizza', price: 121, id: '🍕' },
	{ title: 'Burger', price: 121, id: '🍔' },
	{ title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts2 = products2.filter(item => item.id !== '🍔')

console.log("products", products2);
console.log("myProducts", myProducts2);
console.log("-".repeat(10));

// Reto #2

const products4 = [
	{ title: 'Pizza', price: 121, id: '🍕' },
	{ title: 'Burger', price: 121, id: '🍔' },
	{ title: 'Hot cakes', price: 121, id: '🥞' },
];

const update1 = {
	id:'🥞',
	changes: {
		price:200,
		description: 'delicioso'
	}
}

const newArray = products4.map(item => (
	item.id === update1.id ? {...item, ...update1.changes} : item
))

console.log('original',products4)
console.log('nuevo', newArray);