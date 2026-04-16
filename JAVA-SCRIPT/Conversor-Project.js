const converterButton = document.querySelector("#converter-button")
const moedaSelect = document.querySelector("#moeda-select")
const valorInput = document.querySelector("#valor-input")

const valorRealDisplay = document.querySelector("#valor-real-display")
const valorMoedaDisplay = document.querySelector("#valor-moeda-display")
const nomeMoedaDestino = document.querySelector("#nome-moeda-destino")
const bandeiraDestino = document.querySelector("#bandeira-destino")

function converterMoedas() {
    const valorAConverter = valorInput.value

    if (valorAConverter === "" || valorAConverter <= 0) {
        alert("Insira um valor para converter.")
        return
    }

    // Taxas fixas (Segurança de Produção)
    const taxaDolar = 5.20
    const taxaEuro = 5.60
    const taxaBTC = 350000.00

    let valorConvertido = 0

    if (moedaSelect.value === "USD") valorConvertido = valorAConverter / taxaDolar
    if (moedaSelect.value === "EUR") valorConvertido = valorAConverter / taxaEuro
    if (moedaSelect.value === "BTC") valorConvertido = valorAConverter / taxaBTC

    // Formatação Real
    valorRealDisplay.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorAConverter)

    // Formatação Destino
    if (moedaSelect.value === "USD") {
        valorMoedaDisplay.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido)
    }

    if (moedaSelect.value === "EUR") {
        valorMoedaDisplay.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)
    }

    if (moedaSelect.value === "BTC") {
        valorMoedaDisplay.innerHTML = `₿ ${valorConvertido.toFixed(7)}`
    }
}

function mudarMoedaDestino() {
    // CAMINHOS ATUALIZADOS: pasta img dentro da pasta css
    const imgDolar = "./img/usa.png"
    const imgEuro = "./img/euro.png"
    const imgBitcoin = "./img/bitcoin.png"

    if (moedaSelect.value === "USD") {
        nomeMoedaDestino.innerHTML = "Dólar americano"
        bandeiraDestino.src = imgDolar
    }

    if (moedaSelect.value === "EUR") {
        nomeMoedaDestino.innerHTML = "Euro"
        bandeiraDestino.src = imgEuro
    }

    if (moedaSelect.value === "BTC") {
        nomeMoedaDestino.innerHTML = "Bitcoin"
        bandeiraDestino.src = imgBitcoin
    }

    converterMoedas() 
}

converterButton.addEventListener("click", converterMoedas)
moedaSelect.addEventListener("change", mudarMoedaDestino)