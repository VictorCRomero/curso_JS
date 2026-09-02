let num = []
console.log(num)
num[3] = 6
console.log(num)
num.push(7)
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // não é um metodo é um atributo o length, por isso não tem ().
num.sort() // deixa em ordem crescente os valores da array
// num.sort() ele bota em ordem crescente, mas os zeros ele deixa como undefined
console.log(`O primeiro valor do vetor é ${num[0]}`)
let valores = [3,1,5,7,4,9]
console.log(`o vetor valores tem os seguintes números:`)
for(let pos=0;pos<valores.length;pos++){
console.log(`A posição ${pos} do vetor valores tem o valor ${valores[pos]}`)
}
valores.sort()
for(let pos in valores) {
    console.log(`O valor da posição ${pos} com o rearranjo é ${valores[pos]}`)
}
let pos = valores.indexOf(6)
if(pos == -1) {
console.log(`O valor não foi encontrado!`)
} else {
console.log(`o valor está na posição ${pos}`)
}
