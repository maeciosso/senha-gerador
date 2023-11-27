const $btn = document.getElementById("btn");
const menu = document.getElementById("menu")
const divMenu = document.getElementById("div")

$btn.addEventListener("click", () => {
        var length = 10,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*!@#$%^&*",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
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