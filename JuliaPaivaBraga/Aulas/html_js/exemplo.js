//Se precisar comente use  //
var ola = "Ola mundo";
console.log(ola);

function log(valor){
    console.log(valor)
}

//Tipo de variáveis
let valor = 10;
log(typeof valor);

let palavra = "Nome";
log(typeof palavra);

let isOk = true;
log(typeof isOk);

let meuObj = {}; //Object
let meuArry = []; //Array
let nulo = null; //Null
let variavelFlamengo; //Undefined

//Escopo de varavel
function compararEscopo() {
    if (true) {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";
    
        log(varDentro); //Funciona
        log(letDentro); //Funciona
        log(constDentro); //Funciona
    }
    log(varDentro); //Funciona
    //log(letDentro) Não funciona esta forado Escop
    //log(constDentro) Não funciona esta forado Escop
}
compararEscopo();
const n1 = 1;
const n2 = 5;
const valorNumeroStr =  "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

//Operadores Lógicos
log(n1 == n2); //Falsa
log(n2 == valorNumeroStr); //true
log(n2 === valorNumeroStr); //falsa

log((n2 > n1 || n2 > n1) && 1 > 2); //falso

//Manipulação

let frutas = ["Maçã", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas[1]); //Banana

//Adicona novo item
frutas.push("Manga");

log(frutas);

//Remove ultimo intem 
frutas.pop();

log(frutas);

//Estruturas condicionas 
const idade = 18;
if (idade >= 18) {
    log("Sou adulto");
} 
else if (idade >= 2) {
    log("Sou criança");
}
else {
    log("Sou bebê");
}

//Estrutura de repetição 
for(let loop = 0; loop < 5; loop++){ 
    log(`Meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while (valorWhile < 5) {
    log(`Meu valor no while: ${valorWhile}`);
    valorWhile++; //Valor recebe ele mesmo +1
}

//Funções Assícronas permitem executar operações em paralelo
async function buscaDados() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dados Retornados"), 4 * 1000)
    });
}

async function executarBusca() {
    log("##### BUSCANDO DADOS ...... #####");
    let resultado = await buscaDados();
    log(resultado);
}

executarBusca();