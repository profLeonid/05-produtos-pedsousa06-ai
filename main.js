'use strict'

const botao = document.getElementById('botao')
const botaoApagar = document.getElementById('botaoApagar')
const lista = document.getElementById('lista')


botao.addEventListener('click', function () {

    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')

    if (
        codigo.value.trim() === '' ||
        produto.value.trim() === '' ||
        quantidade.value.trim() === ''
    ) {
        alert('Preencha todos os campos!')
        return
    }

    const linha = document.createElement('tr')

    linha.innerHTML = `
        <td class="border p-2">${codigo.value}</td>
        <td class="border p-2">${produto.value}</td>
        <td class="border p-2">${quantidade.value}</td>
    `

    lista.appendChild(linha)

    codigo.value = ''
    produto.value = ''
    quantidade.value = ''
})

botaoApagar.addEventListener('click', function () {

    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    } else {
        alert('Não há produtos para apagar')
    }

})
