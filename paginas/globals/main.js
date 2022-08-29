function notificacoes() {

    alert(document.URL);
}

function carregar() {
    filmes = document.getElementsByClassName("filmes");
    url = document.URL;

    if(url.endsWith("filmes.html")) {
        alert("TERMINA")
        filmes.style.color = "red";
    }
}