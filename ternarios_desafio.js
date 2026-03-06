const a = 10
const b = 4
const operacao = "-" // - * / devem ser usados

/*const resultado = operacao === "+" ? a + b : operacao === "-" ? a-b : a+b + a
 console.log (resultado)*/

 if (operacao === "+"){
    console.log (a + b)
 } else if (operacao === "-"){
    console.log (a - b)
 } else {
    console.log(a+b+a)
 }

