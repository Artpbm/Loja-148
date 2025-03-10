function login(){
    var nome = $("#nome").val()
    var senha = $("#Senha").val()

    if(nome && senha && nome === "admin" && senha === "1234"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000),
        }
        localStorage.setItem("usuario", JSON.stringify(user))

        window.location.href = "https://www.globo.com"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid lightpink"
        document.getElementById("Senha").style.border = "2px solid lightpink"
    }
}
    function fecharError(){
        document.getElementById("error-modal").style.display = "none"
            document.getElementById("nome").style.border = "2px solid aliceblue"
            document.getElementById("Senha").style.border = "2px solid aliceblue"
    }
    
    function ShowPassword(){
        var inputSenha= document.querySelector("#Senha")
        if(inputSenha.getAttribute("type") === "password"){
            inputSenha.setAttribute("type", "text")
        }else{
            inputSenha.setAttribute("type", "password")
        }
    }
