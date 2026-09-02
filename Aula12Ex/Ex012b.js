function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()  
if (hora == 1 && min == 0) {
    msg.innerHTML = `Agora é 0${hora}:0${min}`
} else if (hora < 10 && min < 10){
    msg.innerHTML = `Agora são 0${hora}:0${min}`
} else if (hora < 10){
    msg.innerHTML = `Agora são 0${hora}:${min}`
} else if (min <10) {
    msg.innerHTML = `Agora são ${hora}:0${min}`
} else {
    msg.innerHTML = `Agora são ${hora}:${min}`
}
if (hora < 5){
    //'Boa madrugada!'
    img.src = 'fotonoite.png'
    document.body.style.background = '#a9a9a9'
} else if (hora >= 5 && hora < 12){
    //'Bom dia!'
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f' 
} else if (hora >= 12 && hora < 18) {
    //'Boa tarde!'
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
} else {
    //'Boa noite!'
    img.src = 'fotonoite.png'
    document.body.style.background = '#2F2F4F' 
}
}