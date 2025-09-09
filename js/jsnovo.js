var tabela = document.querySelector("#tabela");

tabela.addEventListener("dblclick", function (event) {
    var alvo = event.target.parentNode;

    alvo.classList.add("fadeOut");

    setTimeout(function () {
        alvo.remove();
    }, 600);
});
