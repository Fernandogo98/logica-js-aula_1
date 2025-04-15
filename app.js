alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 10000 + 1);
console.log(`Valor do Numero Secreto: ${numeroSecreto}`);
let chute;
let tentativas = 1;

//Enquanto = repetição, não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10000");
    console.log(`Valor do chute: ${chute}`); //mostra o valor do chute inserido no prompt
    //se o chute for = ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que: ${chute}`);
        } else {
            alert(`O numero secreto é maior que: ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;

    }
}

let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa"
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com: ${tentativas} ${palavraTentativa}`);

/*if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com: ${tentativas} Tentativas`);
}
else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com: ${tentativas} Tentativa`);

}
*/