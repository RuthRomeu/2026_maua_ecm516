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

const falarOi = nome => console.log('Oi, $(nome)')
falarOi('Maria')

const somar = (a, b) => a+b
