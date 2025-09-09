var campofiltro = document.querySelector("#filtrar-tabela");

campofiltro.addEventListener("input", function () {
    var clientes = document.querySelectorAll(".cliente");

    if (this.value.length > 0) {
        var expressao = new RegExp(this.value, "i");
        for (var cli = 0; cli < clientes.length; cli++) {
            var cliente = clientes[cli];
            var nome = cliente.querySelector('.nome').textContent;

            if (!expressao.test(nome)) {
                cliente.classList.add("invisivel");
            } else {
                cliente.classList.remove("invisivel");
            }
        }
    } else {
        for (var cli = 0; cli < clientes.length; cli++) {
            clientes[cli].classList.remove("invisivel"); // corrigido
        }
    }
});
