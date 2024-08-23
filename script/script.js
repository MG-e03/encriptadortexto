document.getElementById('textoEntrada').addEventListener('input', validarMinusculas);

function validarMinusculas(event) {
    const textarea = event.target;
    const valor = textarea.value;
    const nuevoValor = valor.replace(/[^a-z\s]/g, '').toLowerCase(); 
    if (valor !== nuevoValor) {
        textarea.value = nuevoValor;
    }
}

function encriptar() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    if (textoEntrada.trim() !== "") {
        document.getElementById('contenedorImagen').style.display = 'none';
        document.getElementById('textoSalida').value = encriptarTexto(textoEntrada);
        document.getElementById('botonCopiar').style.display = 'block'; 
    }
}

function desencriptar() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    if (textoEntrada.trim() !== "") {
        document.getElementById('contenedorImagen').style.display = 'none';
        document.getElementById('textoSalida').value = desencriptarTexto(textoEntrada);
        document.getElementId('botonCopiar').style.display = 'block'; 
    }
}

function encriptarTexto(texto) {
    const reglas = [
        { letra: "e", codigo: "enter" },
        { letra: "i", codigo: "imes" },
        { letra: "a", codigo: "ai" },
        { letra: "o", codigo: "ober" },
        { letra: "u", codigo: "ufat" }
    ];
    
    texto = texto.toLowerCase();

    reglas.forEach(regla => {
        texto = texto.replaceAll(regla.letra, regla.codigo);
    });

    return texto;
}

function desencriptarTexto(texto) {
    const reglas = [
        { letra: "e", codigo: "enter" },
        { letra: "i", codigo: "imes" },
        { letra: "a", codigo: "ai" },
        { letra: "o", codigo: "ober" },
        { letra: "u", codigo: "ufat" }
    ];
    
    texto = texto.toLowerCase();

    reglas.forEach(regla => {
        texto = texto.replaceAll(regla.codigo, regla.letra);
    });

    return texto;
}

function copiarTexto() {
    const textoSalida = document.getElementById('textoSalida');
    textoSalida.select();
    document.execCommand('copy');
}
