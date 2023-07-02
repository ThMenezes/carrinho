let valorTotal = [0,0];
let valorProduto = [50.00,30.00];
let qtd = [0,0];

function adicionarItem(item){
    let quantidade = document.getElementById('quantidade' + item);
    let total = document.getElementById("total" + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];

    total.innerHTML = valorTotal[item].toFixed(2);
}

function removerItem(item) {
    if(qtd[item] > 0) {
        qtd[item] -=1;
        let quantidade = document.getElementById("quantidade" + item);
        let total = document.getElementById('total' + item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item]);
        total.innerHTML = valorTotal[item].toFixed(2);
    }
}