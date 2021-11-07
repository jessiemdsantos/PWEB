function entrou(imagem){
    imagem.src="imgs/janelaaberta1.png"
    document.getElementById('mensagem').innerHTML="Janela aberta!"            
}

function saiu(imagem){
    imagem.src="imgs/janelafechada1.png"
    document.getElementById('mensagem').innerHTML="Janela fechada!"
}

function clicar(imagem){
    imagem.src="imgs/janelaquebrada1.png"
    document.getElementById('mensagem').innerHTML="Janela quebrada!"
}