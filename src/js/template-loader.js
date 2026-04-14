document.addEventListener("DOMContentLoaded", function() {
    // Carrega o cabeçalho
    fetch("../templates/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });

    // Carrega o rodapé
    fetch("../templates/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});