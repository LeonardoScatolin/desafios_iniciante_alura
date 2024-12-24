function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`)
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    imagem.classList.toggle("dashboard__item__img--rented")
    botao.classList.toggle("dashboard__item__button--return")

    console.log(botao.textContent)

    botao.textContent === "Alugar" ? botao.textContent = "Devolver" : botao.textContent = "Alugar";

}