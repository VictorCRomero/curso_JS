function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector ('input#txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length <= 3 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - fano.value
        var gen = ''
        var img = document.createElement ('img')
        img.setAttribute('id','foto') // como se eu estivesse escrevendo <img id='foto'>
        if (fsex[0].checked) {
            gen = 'homem'
            if (idade >=0 && idade <= 13) {
                //Criança
                img.setAttribute('src','foto-bebe-m.png')
            } else if (idade < 25) {
                //Jovem                
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'mulher'
            if (idade >=0 && idade <= 13) {
                //Criança
                img.setAttribute('src','foto-bebe-f.png')
            } else if (idade < 25) {
                //Jovem                
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 60) {
                //Adulta
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                //Idosa
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        if (gen == 'mulher') {   
            if (idade == 1) {
                res.innerHTML = `Você é uma ${gen} com ${idade} ano!</br>`
            } else {
                res.innerHTML = `Você é uma ${gen} com ${idade} anos!</br>`
            }
        } else if (gen == 'homem') {
            if (idade == 1) {
                res.innerHTML = `Você é um ${gen} com ${idade} ano!</br>`
            } else {
                res.innerHTML = `Você é um ${gen} com ${idade} anos!</br>`
            }
        }
            res.appendChild(img)
    }
}