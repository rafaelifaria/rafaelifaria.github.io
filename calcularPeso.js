function calcularPeso() {
    // Obter o peso original e o planeta escolhido
    var pesoOriginal = parseFloat(document.getElementById("pesoOriginal").value);
    var planeta = document.getElementById("planeta").value;

    // Fator de gravidade nos diferentes planetas
    var fatorGravidade = {
        lua: 0.165,
        marte: 0.376,
        sol: 27.072,
        plutao: 0.067
    };

    // Calcular o peso no planeta escolhido
    var pesoNoPlaneta = pesoOriginal * fatorGravidade[planeta];

    // Exibir o resultado
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>O peso no ${planeta.charAt(0).toUpperCase() + planeta.slice(1)} é ${pesoNoPlaneta.toFixed(2)} kg.</p>`;
}
