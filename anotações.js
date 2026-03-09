IMPRIMIR NO CONSOLE
//console.log é usado para imprimir mensagens no console do navegador ou do ambiente de execução Node.js.
//tambem pode ser considerado um codigo imperativo, pois executa uma ação direta, manda o computador fazer algo.
//Exemplo:
console.log('Olá, mundo!');
//string é uma sequencia de caracteres, ou seja, um texto.
cntrl + alt + seta pra baixo duplica a linha



COMENTARIO
//   a /* serve para iniciar um comentário de múltiplas linhas
// e o */ serve para finalizar o comentário de múltiplas linhas. exemplo:
/* 
Este é um comentário de múltiplas linhas.
Ele pode se estender por várias linhas.
*/



BLOCO DE CODIGO
{console.log("isto é um bloco de código")} //{} o bloco de codigo serve para agrupar varios comandos em um unico local

// um código é orgazinado primeiramente por pastas. depois arquivos, depois senteças (linhas) ou blocos de código 



VARIAVEL/DADOS
//var ou let serve para atribuir um valo a uma variavel.
// a variavel pode ser modificada ao longo do codigo
var (variavel da escolha) = (valor atribuido)
//exemplo:
var idade = 25

//tipo do valor da variavel
let preco = 19.99
//mostraremos no console assim:
console.log(typeof preco) // o resultado ser number
//ou
console.log(typeof 19.99)

//boolean (mostra se o valor é verdadeiro ou falso)
let estaChovendo = true // ou false
console.log(typeof estaChovendo) // o resultado sera boolean

//para transforar uma variavel em uma constante usamos o const
const pi=3.14
//o valor não pode ser modificado depois de atribuido

Operações matematicas
// / + - * e %

// % é o operador modulo, que mostra o resto da divisão

comparadores relacionais
/*== = igual a
!= = diferente de 
> = maior que
< = menor que
>= = maior ou igual a 
<= = menor ou igual a
*/
//exemplo:
let a = 10
let b = 5 
console.log(a > b) // true
/*  === = estritamente igual a (compara valor e tipo) 

!== = estritamente diferente de (compara valor e tipo)*/


Atribuições
/* = = atribuição
+= = adição e atribuição
-= = subtração e atribuição
*= = multiplicação e atribuição
/= = divisão e atribuição
%= = modulo e atribuição*/

Lógicos
/* && = E (AND) só pode ser verdadeiro se ambos os valores forem verdadeiros
|| = OU (OR) pode ser verdadeiro se um dos valores for verdadeiro
! = NÃO (NOT) inverte o valor lógico
== = XOR (OU exclusivo) verdadeiro se um dos valores for verdadeiro, mas não ambos*/

Unários
/* a++ = incrementa o valor da variavel em 1 (postfix)
++a = incrementa o valor da variavel em 1 (prefix tem maior prioridade na expressão)
a+b= incrementa o valor da variavel em b (infix)

a-- = decrementa o valor da variavel em 1 (postfix)
--a = decrementa o valor da variavel em 1 (prefix)
a-b= decrementa o valor da variavel em b (infix)
exemplo de prioridade do prefix:
let a = 1
let b = 2 
console.log(++a===b++) vai ser true, pois primeiro é exevutado o prefix, depois a atribuição e depois o postfix
ou seja, ++a incrementa a para 2, depois é comparado com b que é 2, depois b++ incrementa b para 3


! = negação lógica, inverte o valor logico
!! = duplo NOT, converte um valor para booleano*/

Ternarios
// operador ternário é uma forma concisa de escrever uma expressão condicional. Ele tem a seguinte sintaxe:
//condição ? expressão1 : expressão2
//se a condição for verdadeira, a expressão1 é avaliada e retornada; caso contrário, a expressão2 é avaliada e retornada.
//exemplo:
const hora = 14
let horario = hora <= 12 ? "bom dia" : hora >= 18 ? "boa noite" : "boa tarde"
console.log (horario)

Estrutura de controle

/* condicionais: if, else, else if, switch
repetição: for, while, do while
funções: function, arrow function
*/


