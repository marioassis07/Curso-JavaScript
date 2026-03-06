let a = 1
let b = 2

console.log (a==b) // false pois 1 não é igual a 2

a++ // incrementa 1 unidade em a (a = a + 1)

console.log (a==b) // true, pois agora a é igual a 2

b++ // incrementa 1 unidade em b (b = b + 1)

console.log (a==b) // false, pois agora b é igual a 3

console.log (++a==b++ ) // true, pois a é incrementado para 3 antes da comparação e b é incrementado para 4 após a comparação

