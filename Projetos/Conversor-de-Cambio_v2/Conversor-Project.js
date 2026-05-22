const converterButton = document.querySelector("#converter-button");
const moedaSelectDe = document.querySelector("#moeda-select-de");
const moedaSelectPara = document.querySelector("#moeda-select-para");
const valorInput = document.querySelector("#valor-input");

const valorDeDisplay = document.querySelector("#valor-de-display");
const nomeMoedaDe = document.querySelector("#nome-moeda-de");
const bandeiraDe = document.querySelector("#bandeira-de");

const valorParaDisplay = document.querySelector("#valor-para-display");
const nomeMoedaPara = document.querySelector("#nome-moeda-para");
const bandeiraPara = document.querySelector("#bandeira-para");

// Endpoint seguro e de alta disponibilidade da AwesomeAPI
const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

async function fetchLiveRates() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Falha na interceptação de taxas.");
        const data = await response.json();
        
        // Mapeamento dinâmico de chaves em tempo real
        return {
            BRL: 1.0,
            USD: parseFloat(data.USDBRL.bid),
            EUR: parseFloat(data.EURBRL.bid),
            BTC: parseFloat(data.BTCBRL.bid)
        };
    } catch (error) {
        console.error("Erro no Pipeline DataOps, utilizando fallback de contingência:", error);
        // Fallback resiliente caso a API falhe (Sua base estática de segurança)
        return { BRL: 1.0, USD: 4.99, EUR: 5.88, BTC: 372346.05 };
    }
}

async function converterMoedas() {
    // 1. Puxa os dados da API paralelamente
    const taxas = await fetchLiveRates();
    
    const moedaOrigem = moedaSelectDe.value;
    const moedaDestino = moedaSelectPara.value;
    
    // 2. MOTOR DA NOVA FEATURE: Cotação Unitária em Tempo Real
    const cotacaoUnitaria = taxas[moedaOrigem] / taxas[moedaDestino];
    const taxaTempoReal = document.querySelector("#taxa-tempo-real");
    
    // Formatação de alta precisão (4 casas decimais) para a badge de câmbio
    const formatoTaxa = new Intl.NumberFormat(getLocale(moedaDestino), {
        style: "currency",
        currency: moedaDestino,
        minimumFractionDigits: 4
    }).format(cotacaoUnitaria);
    
    taxaTempoReal.innerHTML = `1 ${moedaOrigem} = ${formatoTaxa}`;

    // 3. Validação do Input (Continua com a rotina normal se houver valor)
    const valorAConverter = parseFloat(valorInput.value);

    if (isNaN(valorAConverter) || valorAConverter <= 0) {
        return; // Trava a conversão das fatias grandes, mas a badge 1:1 já foi atualizada lá em cima
    }

    // 4. Lógica Híbrida Original
    const valorEmReal = valorAConverter * taxas[moedaOrigem];
    const valorConvertido = valorEmReal / taxas[moedaDestino];

    formatarDisplay(valorDeDisplay, valorAConverter, moedaOrigem);
    formatarDisplay(valorParaDisplay, valorConvertido, moedaDestino);
}

function formatarDisplay(elemento, valor, moeda) {
    if (moeda === "BTC") {
        elemento.innerHTML = `₿ ${valor.toFixed(7)}`;
    } else {
        elemento.innerHTML = new Intl.NumberFormat(getLocale(moeda), {
            style: "currency",
            currency: moeda
        }).format(valor);
    }
}

function getLocale(moeda) {
    const locales = {
        BRL: "pt-BR",
        USD: "en-US",
        EUR: "de-DE", // Correção técnica para formato Europeu nativo
        BTC: "en-US"
    };
    return locales[moeda] || "pt-BR";
}

function atualizarInterface() {
    const imagens = {
        BRL: "assets/brasil.png",
        USD: "assets/usa.png",
        EUR: "assets/euro.png",
        BTC: "assets/bitcoin.png"
    };

    const nomes = {
        BRL: "Real brasileiro",
        USD: "Dólar americano",
        EUR: "Euro",
        BTC: "Bitcoin"
    };

    bandeiraDe.src = imagens[moedaSelectDe.value];
    nomeMoedaDe.innerHTML = nomes[moedaSelectDe.value];

    bandeiraPara.src = imagens[moedaSelectPara.value];
    nomeMoedaPara.innerHTML = nomes[moedaSelectPara.value];

    converterMoedas();
}

// Ouvintes de Eventos (Event Listeners)
converterButton.addEventListener("click", converterMoedas);
moedaSelectDe.addEventListener("change", atualizarInterface);
moedaSelectPara.addEventListener("change", atualizarInterface);
// Feature Extra: Conversão dinâmica enquanto o usuário digita
valorInput.addEventListener("input", converterMoedas);
// Força o aplicativo a buscar a cotação no exato segundo em que a página carregar
window.addEventListener('DOMContentLoaded', atualizarInterface);