//document.querySelector(".total").textContent=document.querySelectir(".qtde").textContent = document.querySelector(".unitario").textContent
//captura encomenda da tabela

var clientes = document.querySelectorAll(".cliente")

//Passa por todas as encomendas e calcula o valor total
for (var count = 0; count < clientes.length; count++) {

    //Quantidade de encomenda
    var tab_qtde = clientes[count].querySelector(".qtde").textContent;

    //valor do produto
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;

    //Verifica se a quantidade é valida
    if (tab_qtde < 1 || isNaN(tab_qtde)) {
        // quantidade invalida
        clientes[count].querySelector(".qtde").textContent = "Quantidade invalida";
        clientes[count].classList.add("info-invalida");
    }

    else if (tab_unitario < 1 || isNaN(tab_unitario)) {

        clientes[count].querySelector(".unitario").textContent = "Valor Unitario";

        clientes[count].querySelector(".unitario").classList.add("info-unitario");


    } else {
        clientes[count].querySelector(".total").textContent = calculaTotal
        (tab_qtde, tab_unitario)
    }

}

//Função de calculo do valor total
function calculaTotal(qtde, unit) {
    var total = 0;

    total = qtde * unit;
    
    return total;
}