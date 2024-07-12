function countWords(array) {
    return array.reduce((total, phrase) => {
        const words = phrase.split(' '); // aqui se divide cada frase en palabras
        return total + words.length; // Sumar el número de palabras a la cuenta total
    }, 0); // Inicializar el acumulador en 0
}
const phrases = [
    "Beautiful is better than ugly.",
    "Explicit is better than implicit.",
    "Simple is better than complex.",
    "Complex is better than complicated."
];

const totalWords = countWords(phrases);
console.log(totalWords); 
