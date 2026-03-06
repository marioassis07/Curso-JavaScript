const hora = 14
let horario = hora <= 12 ? "bom dia" : hora >= 18 ? "boa noite" : "boa tarde"
console.log (horario)
// a hora é 14, então a condição (?) hora <= 12 é falsa, então é avaliada a próxima expressão (:) hora >= 18
// que tambem é falsa, então é avaliada a próxima expressão (:) "boa tarde", que é retornada e atribuida a variavel horario, e depois é impressa no console.
