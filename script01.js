// Nós vamos criar um sistema que avalia se o aluno foi aprovado ou não em uma matéria. Pergunte pro usuário:

// -nome do aluno
// a matéria
// a Nota
// Com os valores recebidos, verifique se o aluno teve nota superior a média (6). A saída do programa deve falar:
// parabéns, o aluno x foi aprovado na materi 

// console.log('Sistema');
// let nome = prompt('Qual seu nome');
// let matéria = prompt ('Qual é a matéria');
// let nota = prompt ('Qual sua nota');

// if(nome){
//     alert ('Parabéns, o ' + nome + 'foi aprovado na máteria' + nota);
// else if(nome){}

// else(){}

let aluno = prompt ('qual seu nome');
let matéria = prompt ('Qual sua matéria')
let nota = prompt ('Qual foi sua nota');

let media = 6;

if (Number(nota) >= media) {
    // alert ('Parabéns, o aluno' + aluno + 'foi aprovado na máteria' + matéria);
// Template String
    alert(`Parabéns, o aluno ${aluno} foi aprovado na matéria ${matéria}`);
}
else if (Number(nota) >= media - 0.5){
    // alert ('O aluno' + aluno + 'foi aprovado na máteria' +  matéria + 'pelo sistema');
    // Template String
    alert(`O aluno ${aluno} foi aprovado na matéria ${matéria} pelo sistema`);
}
else{
    // alert('Parece que a nota do aluno' + aluno + 'na matéria' + matéria + ' foi insuficiente');
    // Template String
    alert(`Parace que a nota do aluno ${aluno} na matéria ${matéria} foi insuficiente`);
}

// LAÇO
// \\CONTADOR
// \\CONDIÇÃO
// \\PASSO