'use strict'

const botao = document.getElementById('botao')

botao.addEventListener('click', function () {

    const lista = document.getElementById('lista')
    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')

    // 🔎 Validação
    if (
        codigo.value.trim() === '' ||
        produto.value.trim() === '' ||
        quantidade.value.trim() === ''
    ) {
        alert('Preencha todos os campos!')
        return
    }

    // 🗑 Remove produto anterior
    lista.innerHTML = ''

    // 📦 Criando elemento
    const item = document.createElement('div')
    item.classList.add('border', 'p-3', 'rounded', 'bg-gray-100')

    item.innerHTML = `
        <p><strong>Código:</strong> ${codigo.value}</p>
        <p><strong>Produto:</strong> ${produto.value}</p>
        <p><strong>Quantidade:</strong> ${quantidade.value}</p>
    `

    lista.appendChild(item)

    // 🔄 Limpar campos
    codigo.value = ''
    produto.value = ''
    quantidade.value = ''
})