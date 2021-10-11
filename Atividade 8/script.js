var idade,
    media = 0, 
    i = 0,
    sexo,
    opinao,
    maisVelha = 0,
    maisNova = 10,
    qtdePessimo = 0,  
    percBomOtimo = 0,
    qtdeMulheres = 0;
    qtdeHomens = 0;
    


function addOp(){

    if(i < 45){
        
            dadosIdade()
            dadosSexo()
            dadosOpiniao()
            limpar()
            i++            
            document.getElementById('contador').
            innerText = 'Foram entrevistadas ' + i + '/45 pessoas'          
        

    }else{
        document.getElementById("confirmar").disabled = true;
        document.getElementById('contador').innerText = 'Limite total atingido. Clique em exibir resultados' 
    }

}

function dadosIdade(){     
    idade = Number.parseInt(document.getElementById('idade').value)
    media += parseFloat(idade, 2)
    if(idade > maisVelha){
        maisVelha = idade;
    }

    if(idade < maisNova){
        maisNova = idade;
    }

}

function dadosSexo(){
    if(document.querySelector('#feminino').checked == true){
        qtdeMulheres++ 
    }
    if (document.querySelector('#masculino').checked == true){
        qtdeHomens++
    }
}

function dadosOpiniao(){
    if(document.querySelector('#otimo').checked == true || document.querySelector('#bom').checked == true){
        percBomOtimo++ 
    }
    if (document.querySelector('#pessimo').checked == true){
        qtdePessimo++
    }
}

function limpar(){
    document.getElementById('idade').value = ""
    document.querySelector('#feminino').checked = false
    document.querySelector('#masculino').checked = false
    document.querySelector('#otimo').checked = false
    document.querySelector('#bom').checked = false
    document.querySelector('#regular').checked = false
    document.querySelector('#pessimo').checked = false
    document.getElementById('h2').innerText =""
    document.getElementById('p').innerText =""
    

}

function resultado(){    
    if(i < 45){
        document.getElementById('h2').innerText = "Confira o resultado parcial:"
    }else{
        document.getElementById('h2').innerText = "Confira o resultado final:"
    }

    document.getElementById('p').innerText = `Média das idades: ${media/i}\n\nIdade da pessoa mais velha: ${maisVelha}\n\nIdade da pessoa mais nova: ${maisNova}\n\nQuantidade de opiniões "Péssimo": ${qtdePessimo}\n\nPorcentagem de opiniões "Bom ou Ótimo": ${(100*percBomOtimo/i)}%\n\nQuantidade de mulheres: ${qtdeMulheres}\n\nQuantidade de homens: ${qtdeHomens}`
}


