// console.log('Entrou no laço');

// CONTADOR
// console.log('entrou no laço');

// let i = 6;

// while(i>0){
//     console.log(i);

//     i = i + 1;
// }

// console.log('saiu do laço');

// let lances = {
//     lance: [
//         *
//         **
//         ***
//         ****
//         *****
//     ]
// };
// let material = {
//     materia: [
//         #
//         ##
//         ###
//         ####
//         #####
//     ]
// };


// let lances = prompt = ('qual lances são');
// let material =  prompt = ('qual é o material');

let lancesDeEscada = Number (prompt ('Quantos lances de escada você gostaria'))

while(isNaN(lancesDeEscada)){
    lancesDeEscada = Number (prompt (`Você digitou "${lancesDeEscada}. O programa só aceita valores numéricos nessa etapa. Por favor, digite quantos lances de escada você gostaria.`))
}

let material = prompt ('Qual o material da sua escada');
let desenho= '';

let i = 0;

// while(isNaN(lancesDeEscada)){
//     lancesDeEscada = Number (prompt (`Você digitou "${lancesDeEscada}. O programa só aceita valores numéricos nessa etapa. Por favor, digite quantos lances de escada você gostaria.`))
// }

while (i< lancesDeEscada){
    desenho = desenho + material;
    console.log(desenho);

    i++;
}

