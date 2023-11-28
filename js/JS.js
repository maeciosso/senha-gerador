const $btn = document.getElementById("btn");

const $btn2 = document.getElementById("btn2");

const $btn3 = document.getElementById("btn3");

const $btn4 = document.getElementById("btn4");

$btn.addEventListener('click', function(){
    
    let cor1 = document.getElementById("cor1").value;
    console.log(cor1);
    
    document.getElementById("container").style.backgroundColor = cor1
})

$btn2.addEventListener('click', function(){
    
    let cor2 = document.getElementById("cor2").value;
    console.log(cor2);
    
    document.getElementById("p").style.color = cor2
})

$btn3.addEventListener('click', function(){
    
    let cor3 = document.getElementById("cor3").value;
    console.log(cor3);
    
    document.getElementById("container3").style.backgroundColor = cor3
})

$btn4.addEventListener('click', function(){
    
    let cor4 = document.getElementById("cor4").value;
    console.log(cor4);
    
    if(cor4 == null){
        cor4 = "black"
        document.getElementById("container4").style.backgroundColor = cor4
    } else{
        document.getElementById("container4").style.backgroundColor = cor4
    }
})


const divMenu = document.getElementById("div")
const menu = document.getElementById("menu")
menu.addEventListener("click", () => {
    divMenu.classList.toggle("hide")
})