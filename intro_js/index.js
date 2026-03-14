//console.log ("Hello World")
// //declarando constantes
// const nome = 'Ruth'
// console.log(nome)
// const idade = 22
// console.log(typeof(idade))

// //diferença entre let e const: let admite reatribuição
// let a =2
// let passouDeAno = true
// console.log(passouDeAno)


/* const n1 = 2
const n2 = '3'
const n3 = n1+n2
console.log(n3)

const n4 = n1 + Number(n2)
console.log(n4) */

/* console.log(1 == '1')
console.log(1 === '1') */

// evitar usar o '==', usar '===' no lugar
/* 
v1 [10, 8] // List <Object> v1 = new ArrayList <>[];
console.log(v1.length)
v1[0] = 2
console.log(v1.length)
v1[1] = 'abc'
console.log(v1.length)
v1[10] = 'Joao'
console.log(v1.length)
console.log(v1)
for(let i = 0; i < v1.length; i++){
    console.log(v1(i))
}
 */
/* function hello(){
    console.log('Oi')
}

hello()
function hello(nome){
    console.log('Oi', $nome)
}

hello('Maria') */

/* const triplo = function(n = 5){
    return 3 * n
}

console.log(triplo)
console.log(triplo, 10) */

/* const falarOi = () => {console.log('Oi')}
falarOi() */

/* const falarOi = nome => console.log('Oi, $(nome)')
falarOi('Maria')

const somar = (a, b) => a+b */

//JSQN: JavaScript Object Notation
//Uma pessoa se chama Maria com 21 anos mora na rua B, número 50
/* let pessoa = {
    nome: 'Maria',
    idade: 21,
    endereco: {
        logradouro: 'Rua B',
        numero:50
    }
} */
/* console.log(pessoa.endereco.logradouro)
console.log(pessoa['endereco']['numero'])
console.log(pessoa.endereco['logradouro'])
console.log(pessoa.['endereco'].numero)
console.log(pessoa.endereco) */

// Uma pessoa que se chama João e tem 17 anos

/* let pessoa = {
    nome: 'João',
    idade: 17
}
console.log(pessoa.nome)
console.log(pessoa['idade']) */

//Uma concessionaria tem nome, cnpj e endereço (logradouro, numero e bairro), ela tbm tem seu estoque de veiculos. A quantidade de veiculos é arbitraria. A qualquer instante, ela pode ter 2 ou 5 ou 17 veiculos. Cada veiculo, modelo, marca e placa.
/* const concessionaria = {
    cnpj:"0000000/0001-12",
    nome: "concessionaria Ramos",
    endereco: {
        logradouro: "Rua palmeiras",
        numero: 12,
        bairro: {
            nome: "Vila J"
        }
    },
    estoque:{
        modelo:"",
        marca:"",
        placa: ""
    }
} */

//Uma calculadora realiza as quatro operações funcionais 
// Soma representado por uma arrow function que faz return
// Subtração representada por uma arrow function sem return 
// Multiplicação function regular
// Divisão você escolhe
// todas elas operam com dois operadores

/* const calculadora = {
    operacoes: {
        soma: (a, b) =>{return a+b},
        subtracao: (a, b) => a-b,
        

    }
} */

//1 +2+3+4... +n
const calculaDemorado = (n) => {
    let cont = a
    for(let i = 1; i<=n; i++)
        cont += i
    return cont
}
const res= calculaDemorado(1000)
console.log(res)

//CPU Bound: predominantemente caracterizada por ciclos de cpu
//ID Bound: predominantemente caracterizada por operações de entrada e saida
/* const fs = require('fs')
const nomeArquivo = 'arquivo.txt'
//função callback
const exibirConteudo = (erro, conteudo) => {
    console.log("A")
    if(erro){
        console.log('Deu erro: $(erro)')
    }
    else{
        console.log('Conteudo: $(conteudo)')
        const dobro = Number(conteudo.toSring())*2
        //Mais uma função callback
        const finalizar = (erro) => {
            console.log(erro ? "Deu erro ao escrever o dobro" : "Ok, escreveu o dobro")
            console.log('C')
            const exibirDobro = (erro, conteudo) => {
                console.log('E')
                console.log(erro ? "Deu erro lendo o dobro" : "Ok, escreveu o dobro")
            }
        }
        fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        console.log('D')
    }
}
fs.readFile(nomeArquivo, exibirConteudo)
console.log("B") */


/* function demorada (){
    const dataAtualMais25segundos= new Data().getTine() + tempo
    while(new Data().getTime() <= dataAtualMais25segundos);
    const d= 8+2+6
    console.log('Demorada com tempo:  $(tempo)')
    return d
}
setTimeout(()=>{
    demorada(5000)
}, 5000)
setTimeout(()=>{
    demorada(1000)
},1000)


setTimeout(()=> {
    console.log("Agendada pela setTimeout ")
},0)
const dataAtualMais55Segundos = new Data().getTime() + soma
while (new Data.getTime() <= dataAtualMais55Segundos);
concole.log("Terminando script principal...")

const a = 2+3
const b= 6 +1
setTimeout(() => {
    const d = demorada()
    console.log('d: $(d)')
}
) */