//Exercicio 1
const EURO = 5.7;
const DOLAR = 5.2;

let real = 20.0;

console.log("Dinheiro: " + real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("Real para Euro: " + (EURO / real).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
console.log("Real para Dolar: " + (DOLAR / real).toLocaleString('en-US', { style: 'currency', currency: 'USD' }))

//Exercicio 2

let idade = 20
let cartao = false;
let responsavel = false;

if ((idade >= 18 && cartao) || responsavel) {
    console.log("Entrada permitida!")
} else {
    console.log("Entrada negada!")
}

//exercicion 3

let nota = 7.9 >= 6 ? "Aprovado" : "Reprovado";
console.log(nota)
