const t1=false
const t2=true

console.log( "vamos comprar a tv de 50\"?", t1&&t2)// AND

console.log("vamos comprar a tv de 32\"?", t1!==t2) //XOR

console.log("vamos comprar sorvete?", t1||t2) //OR

console.log("ficar em casa?", !t1&&!t2) // NOT


// com variaveis

let comprarTV50= t1&&t2
console.log('\n\ncomprar tv de 50"?', comprarTV50)

let comprarTV32= t1!==t2
console.log('comparar tv de 32"?', comprarTV32)

let ComprarSorvete= t1||t2
console.log("comprar sorvete?", ComprarSorvete)

let ficarEmCasa= !t1&&!t2
console.log("ficar em casa?", ficarEmCasa)

