const $texto = document.getElementById('texto')
let img = document.getElementById('qrcode')

$texto.addEventListener('input', function() {
    if($texto.value == ''){
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://portifolio-mauricio.vercel.app/'
    } else{
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=' + $texto.value
    }
});


menu.addEventListener("click", () => {
    document.getElementById('div').classList.toggle("hide")
})