
let valorBase;
let valorTransporte;
let valorAlimentacao;
let receitaTotal;

let valorAutomovel;
let faltas;
let totalDescontos;

let valorTotal;

window.addEventListener('load', function() {
    valorBase = document.getElementById('valorBase')
    valorTransporte = document.getElementById('valorTransporte')
    valorAlimentacao = document.getElementById('valorAlimentacao')

    receitaTotal = document.getElementById('receitaTotal')

    valorAutomovel = document.getElementById('valorAutomovel')
    faltas = document.getElementById('faltas')

    totalDescontos = document.getElementById('totalDescontos')

    valorTotal = document.getElementById('valorTotal')

    // document.getElementById('btnCalcular').addEventListener('click', function() {
    //     calcular();
    // })

    const inputs = document.getElementsByTagName('input')
    for (const input of inputs) {
        input.addEventListener('blur', function () {
            calcular()
        })
    }

    lerLocalStorage()
})

function lerLocalStorage() {
        const inputs = document.getElementsByTagName('input');

        for(const input of inputs) {
            const valor = localStorage.getItem(input.id)

            if(valor) {
                input.value = valor;
            } else {
                input.value = '0'
            }
        }
}

function salvarLocalStorage () {
        const inputs = document.getElementsByTagName('input');

        for(const input of inputs) {
            localStorage.setItem(input.id, input.value)
        }
}

function calcular() {
    const totalReceitas = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value)

    receitaTotal.value = totalReceitas

    const descontosTotais = parseFloat(valorAutomovel.value) + parseFloat(faltas.value)

    totalDescontos.value = descontosTotais

    const total = totalReceitas - descontosTotais

    valorTotal.value = total

    salvarLocalStorage()
}