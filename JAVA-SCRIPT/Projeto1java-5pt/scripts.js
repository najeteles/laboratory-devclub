const list = document.querySelector('ul'); // 🟢 CORRIGIDO: Removido o ponto, agora busca a tag <ul> diretamente
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all'); // 🟢 CORRIGIDO: Adicionado botão de mapeamento
const buttonSumAll = document.querySelector('.sum-all'); // 🟢 CORRIGIDO: Adicionado botão de soma
const buttonFilterAll = document.querySelector('.filter-all'); // 🟢 CORRIGIDO: Adicionado botão de filtragem
let currentProducts = [...menuOptions];

function showAll(productsArray) {
    let myLi = ''; 
    currentProducts = productsArray; // 🟢 Atualiza o estado global com os produtos que estão na tela
    
    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}"> 
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price.toFixed(2)}</p>
            </li>
        `;
    });

    list.innerHTML = myLi; 
}

function mapAllItens(productsArray) {
    const newPrices = productsArray.map((product) => ({
        ...product, 
        price: product.price * 0.9, // Desconto de 10%
    }));

    showAll(newPrices); 
}
    
function sumAllItems() {
    // 🟢 CORRIGIDO: Agora soma 'currentProducts' (se tiver desconto na tela, soma com desconto!)
    const totalValue = currentProducts.reduce((accumulator, curr) => accumulator + curr.price, 0);

    // 🟢 OTIMIZADO: Injeta um banner de destaque que ocupa as 3 colunas do Grid elegantemente
    list.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 30px; border: 2px dashed #79cb15; border-radius: 5px; width: 100%;">
            <p style="font-size: 1.6rem; color: #ffffff; margin: 0;">
                O valor total dos itens é <span style="color: #79cb15;">R$ ${totalValue.toFixed(2)}</span>
            </p>
        </div>
    `;
}

function filterAllItems() {
    const veganItems = currentProducts.filter(product => product.vegan);
    showAll(veganItems);
}

// Ouvintes de eventos limpos
buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', () => mapAllItens(menuOptions));
buttonSumAll.addEventListener('click', sumAllItems);
buttonFilterAll.addEventListener('click', filterAllItems); // 🟢 CORRIGIDO: Adicionado evento para o botão de filtragem (ainda usando mapAllItens para demonstração)