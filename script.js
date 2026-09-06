'use strict'

const valores = [123, 50, 456, 3, 24, 88, 10, 65, 1001, 223]
//na programação se usa json, o front end pede informações para o back end
//NÃO se digita dados na mão, mas pode se usar para testar se o backend ainda não estiver pronto

const botaoCriarCards = document.getElementById('criar-cards')
const botaoAbaixoMeta = document.getElementById('abaixo-meta')


function criarCard(valor, container = document.getElementById('container')){
    const card = document.createElement('div')
    card.className = 'card'
    card.textContent = valor 
    card.addEventListener('click', () => {
        card.classList.toggle('selecionado')
    })
    container.append(card)

    if (valor > 100) {
        card.classList.add('cardRed')
    }
}

function criarCards ( valores){
    const container = document.getElementById('container')
    container.innerHTML = ''
    container.replaceChildren()
    valores.forEach(valor => criarCard(valor))
}
//valores[1] - exemplo de comando para ver os itens
//a lista se começa em 0, 1, 2.. etc entao o 1 é o segundo item o ultimo é o 7 pois se contar o 0 mais 7 tem oito itens
botaoCriarCards.addEventListener('click', () => criarCards(valores))
    
botaoAbaixoMeta.addEventListener('click', () => { 
    const containerAbaixoMeta = document.getElementById('container-abaixo-meta')
    containerAbaixoMeta.innerHTML = ''
    const abaixoMeta = valores.filter(valor => valor < 100) 
    abaixoMeta.forEach(valor => criarCard(valor, containerAbaixoMeta))
})
