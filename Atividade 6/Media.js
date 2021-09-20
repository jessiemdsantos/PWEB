var
    nome,
    nota1,
    nota2,
    nota3,
    media;


nome = prompt("Informe o nome do aluno");
nota1 = prompt("Informe a primeira nota");
nota2 = prompt("Informe a segunda nota");
nota3 = prompt("Informe a terceira nota");

media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

alert("Aluno: " + nome + "\nMedia final : " + media.toFixed(2));