// Declaração da variável produtos, global
let produtos

window.onload = function(){
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)
    document.getElementById("user").textContent = user.name
    document.getElementById("perfil").textContent = user.name
    document.getElementById("IdPerfil").textContent = user.id
};

document.addEventListener("DOMContentLoaded", function(){
    //fetch dos produtos e armazenamento na variavel 
    fetch("../Dados/Loja.json").then((response) => response.json())
    .then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container");

        produtos.forEach((produto, index) => {
          const card = document.createElement("div")
          card.className = "card"
          card.style.width = "18rem"

          const imagem = document.createElement("img")
          imagem.src = produto.imagem
          imagem.className = "card-img-top"

          const cardBody = document.createElement("div")
          cardBody.className = "card-body"

          const cardTitle = document.createElement("h5")
          cardTitle.className = "card-title"
          cardTitle.textContent = produto.descricao

          const cardText = document.createElement("p")
          cardText.className = "card-text"
          cardText.textContent = "Preço: $" + produto.preco.toFixed(2)

          const bntAdicionarAoCarrinho = document.createElement("a")
          bntAdicionarAoCarrinho.href = '#'
          bntAdicionarAoCarrinho.className = "btn btn-primary btn-adicionar-ao-carrinho"
          bntAdicionarAoCarrinho.setAttribute("data-indice")
        }) 
     })
        .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
    })
