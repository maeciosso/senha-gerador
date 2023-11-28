const $btn = document.getElementById("btn");
const menu = document.getElementById("menu")
const divMenu = document.getElementById("div")

$btn.addEventListener("click", () => {
        let length = 8;
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let symbol = "@#$&+*:;!?"
        let retVal = [];
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += (charset.charAt(Math.floor(Math.random() * n)) + symbol.charAt(Math.floor(Math.random() * n)))
        }
 if(retVal < length){
            retVal.pop()
        }

    let $ul = document.querySelector("ul")
    $ul.innerHTML = '';
    let $li = document.createElement('li');
    $li.innerText = retVal
    $ul.appendChild($li);
})

menu.addEventListener("click", () => {
    divMenu.classList.toggle("hide")
})
