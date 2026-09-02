function parimp(n) {
    if (n%2 == 0) {
        return `Par!`
    } else {
        return `Ímpar!`
    }
}
let res = parimp(4)
// pode colocar console.log(parimp(4)) direto.
console.log(res)

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(3,4))
/* o parametro do function soma(n1=0, n2=0)
impede que o res seja NaN quando não se define um número
quando não há paramentro nem número o espaço fica undefined 
*/
let v = function (x) {
    return x**2
}
console.log(v(5))

function fatorial1(m) {
    let fat1 = 1
    for (let c = m;c>1;c--){
        fat1 *= c
    }
    return fat1
}
console.log(fatorial1(5))
// recursividade
function fatorial2 (p) {
    if (p == 1) {
        return 1
    } else {
        return p * fatorial2 (p-1) 
    }
}
console.log(fatorial2(6))
