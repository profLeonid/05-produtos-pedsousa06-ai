'use strict'

const botao = document.getElementById('botao')

botao.addEventListener('click', function () {

    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')

    const span = document.createElement('p')
    span.textContent = produto.value

    lista.appendChild(span)

    produto.value = ''
})