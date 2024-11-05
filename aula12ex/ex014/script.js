function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'img_dia.png'
        document.body.style.background = '#d3b883'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img_tarde.png'
        document.body.style.background = '#824216'
    } else {
        img.src = 'img_noite.png'
        document.body.style.background = '#070916'
    }
}