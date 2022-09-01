const arrayOriginal = ["azul", "vermelho", "laranja"]
const arrayCopia = arrayOriginal.slice()
const arrayCopia2 = arrayOriginal.slice()

arrayOriginal.push(5)
arrayCopia.pop()
arrayCopia2.splice(1, 1)

console.log(arrayOriginal)
console.log(arrayCopia)
console.log(arrayCopia2)

