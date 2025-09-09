var botaoAdicionar = document.querySelector("#adiciona-encomenda")
var table = document.querySelector("#tabela tbody")


botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();



    const nomeCliente = document.getElementById("nome").value
    const unit = document.getElementById("unit").value
    const qtde = document.getElementById("qtde").value
    const produto = document.getElementById("produtot").value

    
    if (!nomeCliente.value || !unit.value || !qtde.value || !produto.value) {
        alert("Preencha todos os campos antes de adicionar.")
        return
    }

    
    var novaTr = document.createElement("tr");

    novaTr.innerHTML = `
        <td>${nomeCliente}</td>
        <td>${produto}</td>
        <td>${qtde}</td>
        <td>${unit}</td>
        <td>${qtde * unit}</td>
    `;

    table.appendChild(novaTr)

    console.log("Botao clicado") 

})