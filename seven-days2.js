const nome = prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

let menssagem = prompt(`Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${linguagem}`);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`)
if (gosta == 1){
    alert("Muito bom!Continue estrudando e você terá muito sucesso.")
}
if (gosta == 2) {
    alert("Ahh que pena... Já que tentou aprender outras linguagens?")
}