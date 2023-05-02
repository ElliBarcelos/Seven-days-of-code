const numerosAdivinhacao = 7;

let chute = "";
let acertou = false

for(let contador = 0; contador <3; contador++) {
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numerosAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numerosAdivinhacao}.`);
        acertou = verdadeiro;
        quebrar; 
    }
    alert ("Erro!");
}
if (!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numerosAdivinhacao}`);
}
