//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const numeros = [5, 20, 30, 15]
const strings = ["laranja", "maçã", "banana"]
const array = [15, "vermelho", true]
const tamanho = numeros.length
const tamanho2 = strings.length
const tamanho3 = array.length
const indiceNumero = numeros.indexOf(5)
const indiceStrings = strings.indexOf("maçã")
const indiceArray = array.indexOf(true)
const infTrue = numeros.includes(20)
const infFalse = array.includes("azul")

console.log(infTrue)
console.log(infFalse)
console.log(indiceNumero)
console.log(indiceStrings)
console.log(indiceArray)
console.log(`Essa array tem ${tamanho} itens`)
console.log(`Essa array tem ${tamanho2} itens`)
console.log(`Essa array tem ${tamanho3} itens`)
console.log(numeros)
console.log(strings)
console.log(array)