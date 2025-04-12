alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 8;
let chute = prompt('Escolha um número entre 1 e 10');

//se o chute for = ao numero secreto
if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (8)');
}else{
    alert("Você errou! :(")
}