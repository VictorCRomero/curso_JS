function contar() {
    let inc = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let int = document.getElementById('txtint')
    let res = document.getElementById('res')

    if (inc.value.length == 0 || fim.value.lenght == 0 || int.value.lenght == 0) {
        window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'contando: '
        let i = Number(inc.value)
        let f = Number(fim.value)
        let ic = Number(int.value)
        if (ic <= 0) {
            window.alert('Intervalo inválido!')
            res.innerHTML = 'Insira valores positivos não nulos no intervalo!'
        } else if (i < f) { 
            for(let c = i; c <= f; c += ic) {
                res.innerHTML += ` \u{1F449} ${c} `
         } // contagem crescente
        } else {
            for(let c = i; c >= f; c -= ic) {
                res.innerHTML += ` \u{1F449} ${c} `
            } // contagem decrescente
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
