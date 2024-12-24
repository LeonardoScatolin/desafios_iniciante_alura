let carrinho = []
let total = 0

function adicionar() {
    let item = document.querySelector("select").value;
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let valor = parseInt(item.split("R$")[1]);
    item = item.split(" - ")[0];

    if (quantidade > 0 && true) {
        carrinho.push({ item, quantidade, valor })
        total += valor * quantidade

        console.log(carrinho)

        let listaHTML = "";
        for (let i = 0; i < carrinho.length; i++) {
            listaHTML += `<span class="texto-azul">${carrinho[i].quantidade}x</span> ${carrinho[i].item} <span class="texto-azul">R$ ${carrinho[i].valor}</span> <br>`;
        }

        document.querySelector(".carrinho__produtos__produto").innerHTML = listaHTML;

        console.log(total)

        document.getElementById("valor-total").innerText = `R$ ${total}`
    } else {
        alert("Quantidade inválida")
    }

}


function limpar() {
    carrinho = []
    total = 0

    document.querySelector(".carrinho__produtos__produto").innerText = 'Carrinho vazio!'
    document.getElementById("valor-total").innerText = `R$ -`
}

limpar()