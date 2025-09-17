//Atividade 1

let op = 5;
let pedido;
switch (op) {
    case 1:
        pedido = "Pizza";
        break;
    case 2:
        pedido = "Hambúrguer";
        break;
    case 3:
        pedido = "Salada";
        break;
    case 4:
        pedido = "Refrigerante";
        break;
}

console.log("Cardápio\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\n4 - Refrigetante")
if (op > 4 || op < 1) {
    console.log("Você ainda não escolheu!")
} else {
    console.log("Você escolheu " + pedido)

}

//Atividade 2

let ingresso = 20;
let estudante = true;
let idade = 90;
let idoso = idade >=60 ? true : false;
let nome = "Thomas";


if(idade <=12){
    console.log("Preço do ingresso: Gratuito")
}else if (estudante){
    console.log("Preço do ingresso: "+(ingresso/2))
}else if(idoso){
    console.log("Preço do ingresso: "+(ingresso*0.7))
}else{
    console.log("Preço do ingresso: "+ingresso)
}
