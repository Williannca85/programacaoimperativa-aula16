/* Neste exercício, você terá que criar uma função "FizzBuzz" que recebe dois parâmetros numéricos.
A função deve atender aos seguintes requisitos:
●  Você deve imprimir os números de 1 a 100;
●  Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
●  Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
●  Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.
Avançado: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer. */

const fizzBuzz = (a,b)=>{

for (let i = 1 ; i <= 100 ; i++) { 
    
if (i % a === 0 && i % b === 0) { 
    console.log("FizzBuzz")

} else if (i % a === 0) {
    console.log("Fizz")

} else if (i % b === 0) { console.log("Buzz")

} else {
    console.log(i);}   

    }
}

fizzBuzz(3,5);
