// Obtenha dados da altura e o sexo (m e f) de 15 pessoas e apresente os seguintes resultados:
// - a maior e a menor altura do grupo
// - media de altura dos homens 
// - o numero de mulheres

//Exercicio de Front II

const todosOsDados = [];

for (var i = 1; i <= 15; i++) {
    const generoInformado = prompt("Qual seu genero? 'F' ou 'M' ");
    const alturaInformada = prompt("Qual sua altura? ");

    const dados = {
        genero: generoInformado,
        altura: alturaInformada
    };

    todosOsDados.push(dados);
}


// A maior altura do grupo

let maiorAltura = 0;

for (let i = 0; i < todosOsDados.length; i++) {
    if (todosOsDados[i].altura > maiorAltura) {
        maiorAltura = todosOsDados[i].altura;
    }
}

console.log('A maior altura do grupo', maiorAltura);


// A menor altura do grupo

let menorAltura = maiorAltura;

for (let i = 0; i < todosOsDados.length; i++) {
    if (todosOsDados[i].altura < maiorAltura) {
        menorAltura = todosOsDados[i].altura;
    }
}

console.log('A menor altura do grupo', menorAltura);


// A média de altura dos homens

let somaDaAlturaDosHomens = 0;
let numeroDeHomens = 0;

for (let i = 0; i < todosOsDados.length; i++) {
    if (todosOsDados[i].genero.toLowerCase() === 'm') {
        numeroDeHomens++;
        somaDaAlturaDosHomens += todosOsDados[i].altura;
    }
}

const mediaDasAlturasDosHomens = somaDaAlturaDosHomens / numeroDeHomens;

console.log('A média de altura dos homens', mediaDasAlturasDosHomens);


// O número de mulheres

let numeroDeMulheres = 0;

for (let i = 0; i < todosOsDados.length; i++) {
    if (todosOsDados[i].genero.toLowerCase() === 'f') {
        numeroDeMulheres++;
    }
}

console.log('O número de mulheres', numeroDeMulheres);