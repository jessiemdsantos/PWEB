var nome, email, comentario, resposta;

function validar(){

    nome = document.pesquisa.elements[0].value
    email = document.getElementById("txtEmail").value
    comentario = document.getElementById("txtComentario").value
    
    if(nome.length < 10){
        alert("O campo nome tem menos de 10 caracteres")  
              
    }else if(((email.indexOf("@") > -1) == false) || ((email.indexOf(".") > -1) == false)){
        alert("Informe um endereço de email válido")        
    }else if(comentario.length < 20){
        alert("O campo comentário tem menos de 20 caracteres")  
    }else if(document.getElementById('txtSim').checked == false && document.getElementById('txtNao').checked == false){
        alert("selecione uma resposta")
    }else{
        if(document.querySelector('#txtNao').checked == true){
            alert("Que bom que você voltou a visitar esta página!")
        }else{
            alert("Volte sempre à esta página!")
        }
        
    }

    
}
function limpar(){
    document.getElementById('txtNome').value = ''
    document.getElementById('txtEmail').value = ''
    document.getElementById('txtComentario').value = ''
    document.getElementById('txtSim').checked = false
    document.getElementById('txtNao').checked = false
}