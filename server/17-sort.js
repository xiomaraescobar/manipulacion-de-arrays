const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a );
console.log(numbers);
const words = ['réservé','premier','communiqué','café','adieu','éclair','banana'];
words.sort();
console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2019, 0, 2),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2019, 10, 1),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2020, 4, 1),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2021, 3, 6)
    },
];
orders.sort((a,b) => b.total - a.total );
console.log(orders);

console.log(orders.sort((a, b) => b.total - a.total));
console.log(orders.sort((a,b) => b.date - a.date));