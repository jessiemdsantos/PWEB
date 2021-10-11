function maiorNum(){
    var n1 = parseFloat(document.getElementById("numUm").value); 
    var n2 = parseFloat(document.getElementById("numDois").value);
    var n3 = parseFloat(document.getElementById("numTres").value);
    if(n1 > n2){
        if(n2 > n3){
            document.getElementById('result').innerText = 'O maior número é ' + n1;
        }
    }else if(n2 > n3){
        document.getElementById('result').innerText = 'O maior número é ' + n2;
    }else{
    document.getElementById('result').innerText = 'O maior número é ' + n3;
    }
}   

function ordemCres() {
  
    var n1 = parseFloat(document.getElementById("numUm").value); 
    var n2 = parseFloat(document.getElementById("numDois").value);
    var n3 = parseFloat(document.getElementById("numTres").value);
    var aux = n1;

    if(n1 > n2){
     aux = n2;
     n2 = n1;
     n1 = aux;
    }
    if(n3 < n1){
     aux=n3;
     n3=n1;
     n1=aux;
    }
    if(n3 < n2){
     aux = n3;
     n3 = n2;
     n2 = aux;
    }
   
    document.getElementById('result').innerText = 'A ordem crescente é: '  + n1 + ' - ' + n2 + ' - ' + n3;
}


