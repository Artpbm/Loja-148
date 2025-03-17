$(document).ready(function(){
    //recupera o carrinho do localstorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    //elemento onde a lista sera exibida
    const listElement = $("#lista")
    //elemento para o total
    const totalElement = $("#total")

    //funcao para  exibir o carrinho
    function exibirCarrinho(){
        //limpa o conteúdo atual da lista
        listElement.empty()

        //variavel para acumular o preço total
        let totalPreco = 0

        //intera sobre os itens do carrinho
        $.each(carrinho, function(index, item){
            //cria um elemento da lista para cada item
            const listItem = $("<li>").text(
               `${item.descricao} - preco: $${item.preco}` 
            );

            //cria um botao de remoção do item
            const removeButton = $("<button>")
            .text("❌")
            .css("margin-left", "10px")
            .click(function(){
                removerItemDocarrinho(index)
                
            })

            //Criando pais filhos
            listItem.append(removeButton)
            listElement.append(listItem)
            totalPreco += item.preco
        })
        totalElement.text(`Total: $${totalPreco}`)
    }

    function removerItemDocarrinho(index){
        carrinho.splice(index, 1)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho()
    }

    exibirCarrinho()
})

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")

    
    const listaClone = listaElement.cloneNode(true)
    $(listaClone).find("button").remove()

    const listaHtml = listaClone.innerHTML
    const totalHtml = totalElement.innerHTML

    const conteudoHtml = `
        <html>
            <head>
                 <meta charset="UTF-8" />
        </head>
            <body>
        <h1>Pedido Confirmado<h1>
            ${listaHtml}
            <br>
            ${totalHtml}
            </body>
        </html>
    `

    const blob = new Blob([conteudoHtml], {type: "application/msword"})
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "carrinho.doc"
    link.click()

    document.getElementById("pedido").style.display = "block"
}

function sucessClose(){
    document.getElementById("pedido").style.display = "none"
}