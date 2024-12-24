function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso")
    let setor = tipoIngresso.value

    let qtd = parseInt(document.getElementById("qtd").value);

    if (qtd > 0 && true) {
        let disponivel = document.getElementById(`qtd-${setor}`)
        let saldoIngresso = parseInt(disponivel.textContent) - qtd
        saldoIngresso >= 0 ? disponivel.textContent = saldoIngresso : alert("Não possui essa quantia de ingressos disponíveis")
    } else {
        alert("Quantidade Inválida")
    }
}