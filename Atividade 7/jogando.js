var jogadorEscolha = 0;
var computadorEscolha = 0;
var jogadorPonto = 0;
var computadorPonto =0;
var ganhador = -1; // 0: empate, 1: jogador janha, 3: computador ganha.

function jogar(escolha){
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor((Math.random() * (3))) +1;



if((jogadorEscolha==1) && (computadorEscolha==1) || (jogadorEscolha==2) && (computadorEscolha==2) || (jogadorEscolha==3) && (computadorEscolha==3)) {
    ganhador = 0; 
} 

else if ((jogadorEscolha==1) && (computadorEscolha==3)){
    ganhador = 1; 
}
else if((jogadorEscolha==2) && (computadorEscolha==1)){
    ganhador = 1; 
}
else if((jogadorEscolha==3) && (computadorEscolha==2)){
    ganhador = 1; 
}
else {
    ganhador =2;
}

document.getElementById("jogador-escolha-1").classList.remove("selecionado");
document.getElementById("jogador-escolha-2").classList.remove("selecionado");
document.getElementById("jogador-escolha-3").classList.remove("selecionado");
document.getElementById("computador-escolha-1").classList.remove("selecionado");
document.getElementById("computador-escolha-2").classList.remove("selecionado");
document.getElementById("computador-escolha-3").classList.remove("selecionado");

document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add("selecionado");
document.getElementById("computador-escolha-" + computadorEscolha).classList.add("selecionado");

if(ganhador === 0) {
    document.getElementById('mensagens').innerHTML = 'Legal, Empate!';
} else if (ganhador === 1) {
    document.getElementById('mensagens').innerHTML = 'Yeah! Você ganhou!!';
jogadorPonto++;
document.getElementById('jogador-pontos').innerHTML = jogadorPonto;
} else if (ganhador === 2) {
document.getElementById('mensagens').innerHTML = 'Poxa, você perdeu!';
computadorPonto++;
document.getElementById('computador-pontos').innerHTML = computadorPonto;
}



}
