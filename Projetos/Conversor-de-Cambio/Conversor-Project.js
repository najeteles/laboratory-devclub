const converterButton = document.querySelector("#converter-button")
const moedaSelectDe = document.querySelector("#moeda-select-de") // Select de origem
const moedaSelectPara = document.querySelector("#moeda-select-para") // Select de destino
const valorInput = document.querySelector("#valor-input")

// Elementos do display de Origem
const valorDeDisplay = document.querySelector("#valor-de-display")
const nomeMoedaDe = document.querySelector("#nome-moeda-de")
const bandeiraDe = document.querySelector("#bandeira-de")

// Elementos do display de Destino
const valorParaDisplay = document.querySelector("#valor-para-display")
const nomeMoedaPara = document.querySelector("#nome-moeda-para")
const bandeiraPara = document.querySelector("#bandeira-para")

function converterMoedas() {
    const valorAConverter = parseFloat(valorInput.value)

    if (isNaN(valorAConverter) || valorAConverter <= 0) {
        alert("Insira um valor válido para converter.")
        return
    }

    // TAXAS ATUALIZADAS (Referência: 1 de cada moeda vale quantos Reais?)
    const taxas = {
        BRL: 1.0,
        USD: 4.99,
        EUR: 5.88,
        BTC: 372346.05
    }

    // LÓGICA UNIVERSAL:
    // 1. Convertemos o valor de origem para REAIS
    const valorEmReal = valorAConverter * taxas[moedaSelectDe.value]
    
    // 2. Convertemos de REAIS para a moeda de destino
    const valorConvertido = valorEmReal / taxas[moedaSelectPara.value]

    // FORMATAÇÃO DO VALOR DE ORIGEM (Lado Esquerdo)
    if (moedaSelectDe.value === "BTC") {
        valorDeDisplay.innerHTML = `₿ ${valorAConverter}`
    } else {
        valorDeDisplay.innerHTML = new Intl.NumberFormat(getLocale(moedaSelectDe.value), {
            style: "currency",
            currency: moedaSelectDe.value
        }).format(valorAConverter)
    }

    // FORMATAÇÃO DO VALOR DE DESTINO (Lado Direito)
    if (moedaSelectPara.value === "BTC") {
        valorParaDisplay.innerHTML = `₿ ${valorConvertido.toFixed(7)}`
    } else {
        valorParaDisplay.innerHTML = new Intl.NumberFormat(getLocale(moedaSelectPara.value), {
            style: "currency",
            currency: moedaSelectPara.value
        }).format(valorConvertido)
    }
}

// Função auxiliar para pegar o local de formatação
function getLocale(moeda) {
    const locales = {
        BRL: "pt-BR",
        USD: "en-US",
        EUR: "pt-BR",
        BTC: "en-US"
    }
    return locales[moeda]
}

function atualizarInterface() {
    const imagens = {
        BRL: "assets/brasil.png",
        USD: "assets/usa.png",
        EUR: "assets/euro.png",
        BTC: "assets/bitcoin.png"
    }

    const nomes = {
        BRL: "Real brasileiro",
        USD: "Dólar americano",
        EUR: "Euro",
        BTC: "Bitcoin"
    }

    // Atualiza o lado de ORIGEM
    bandeiraDe.src = imagens[moedaSelectDe.value]
    nomeMoedaDe.innerHTML = nomes[moedaSelectDe.value]

    // Atualiza o lado de DESTINO
    bandeiraPara.src = imagens[moedaSelectPara.value]
    nomeMoedaPara.innerHTML = nomes[moedaSelectPara.value]

    converterMoedas()
}

// Ouvintes de Eventos
converterButton.addEventListener("click", converterMoedas)
moedaSelectDe.addEventListener("change", atualizarInterface)
moedaSelectPara.addEventListener("change", atualizarInterface)