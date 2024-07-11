const items = [1,2,3,3];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {//dentro del obj ya existe ese numero si ese numero no existe se inicializa en 1
        obj[item] = 1;
    } else { //si ya existe se obtiene ese elemnto y se le suma 1
        obj[item] = obj[item] +1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "higth",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "higth",
    },
];
const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj [item] = 1;
    } else {
        obj [item] = obj[item] + 1;
    }
    return obj;
},  {});
console.log(rta1);
