let texto;

function enviar() {
    texto = document.getElementById("algo").value;
    document.getElementById("resultado").innerHTML = "Você digitou: " + texto; 
}
