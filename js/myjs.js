alert("site feito para celulares")
const $btn = document.getElementById("btn")
let historicoNotas = []

$btn.addEventListener('click', function(){
    const nota1 = parseFloat(document.getElementById("1").value);
    const nota2 = parseFloat(document.getElementById("2").value);
    const nota3 = parseFloat(document.getElementById("3").value);
	const nota4 = parseFloat(document.getElementById("4").value);
    
    let notaFinal = nota1 + nota2 + nota3 + nota4;

    historicoNotas.unshift(notaFinal.toFixed(2))

        if (historicoNotas.length > 10) {
            historicoNotas.pop()
        }

        nota1.value = " ";
        nota2.value = " ";
        nota3.value = " ";
        nota4.value = " ";

        atualizarNotas()
});

function atualizarNotas(){
    let $ul = document.getElementById('ul');
    $ul.innerHTML = ''; 
    historicoNotas.forEach(function (notaFinal) {
        let $li = document.createElement('li');

        let resultado = "";
        if(notaFinal >= 28){
            resultado = "passou com " + (notaFinal - 28) + " ponto(s) de sobra";
        } else if(notaFinal <= 28) {
            resultado = "faltam " + (28 - notaFinal) + " ponto(s)"
        }

        $li.innerText = resultado
        $ul.appendChild($li);
    })
}