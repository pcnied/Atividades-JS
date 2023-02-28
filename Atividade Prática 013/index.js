// document.getElementById('botao').addEventListener('click', function() {
//     const nomeDoUsuario = prompt('Digite um nome:');
//     document.getElementById('paragrafo').innerHTML = `"E aí
//     ${nomeDoUsuario}! Você está deixando o seu site dinâmico."`
// });

// document.getElementById('bt-remove').addEventListener('click', function() {
//     document.getElementById('titulo').removeAttribute('class');
// });

let contador = 0;
let contadorHTML = document.getElementById('contador');

document.getElementById('incrementar').addEventListener('click', function() {
    contadorHTML.parentElement.style.display = 'block'
    contadorHTML.innerHTML = `${++contador}`
})

document.getElementById('zerarContador').addEventListener('click', function(){
    contador = 0;
    contadorHTML.parentElement.style.display = 'none'
})



// let contador = 1
// document.getElementById('btn-increment').addEventListener('click', function() {
//     document.getElementById('p-paragrafo').innerHTML = `O contador está com ${contador} cliques`;
//     contador++
// })


// const zerar = document.getElementById('btn-zerar').addEventListener('click', function() {
//     document.getElementById('p-paragrafo').innerHTML = ''
//     contador = 1
// })
