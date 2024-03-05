const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");
const copiarBtn = document.getElementById("copiar");
const textArea = document.getElementById("texto");
const salida = document.getElementById("salida");
const salidaContainer = document.getElementById("salidaContainer");
const sideHolder = document.getElementById("sideHolder");
const alerta = document.getElementById("alerta");
// ------------------ Escuchas ------------------

// ------------------ Validación de caracteres 

textArea.addEventListener("input", () => {
    validarCaracteres();
})
// ------------------ Encriptación

encriptarBtn.addEventListener("click", () => {
    if (textArea.value.trim() != "") {
        textoEncriptado = encriptarTexto(textArea.value);
        salida.innerText = textoEncriptado;
        sideHolder.style.display = "none";
        salidaContainer.style.display = "flex"
        textArea.value = "";
    } else {
        sideHolder.style.display = "block";
        salida.innerText = "";
        salidaContainer.style.display = "none";
    }
})
// ------------------ Desencriptación

desencriptarBtn.addEventListener("click", () => {
    if (textArea.value.trim() != "") {
        textoDesencriptado = desencriptarTexto(textArea.value);
        salida.innerText = textoDesencriptado;
        sideHolder.style.display = "none";
        textArea.value = "";
        salidaContainer.style.display = "flex";
    } else {
        sideHolder.style.display = "block";
        salida.innerText = "";
        salidaContainer.style.display = "none";
    }
})
// ------------------ Copiar

copiarBtn.addEventListener("click", function () {
    salida.select();
    document.execCommand('copy');
    mostrarAlerta();
});

// ------------------ Funciones ------------------

// ------------------ Validación de caracteres 

function validarCaracteres() {
    let texto = textArea.value;
    let noValido = true;
    let letrasMinusculas = /^[a-z\s]+$/

    if (texto.trim().length > 0) {
        if (!letrasMinusculas.test(texto)) {
            noValido = true;
        } else {
            noValido = false;
        }
    } else {
        noValido = true;
    }

    encriptarBtn.disabled = noValido;
    desencriptarBtn.disabled = noValido;
}
// ------------------ Encriptación

function encriptarTexto(texto) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textoEncriptado += "ai";
                break;

            case "e":
                textoEncriptado += "enter";
                break;

            case "i":
                textoEncriptado += "imes";
                break;

            case "o":
                textoEncriptado += "ober";
                break;

            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += texto[i];
        }
    }
    return textoEncriptado;
}
// ------------------ Desencriptación

function desencriptarTexto(texto) {
    let textoDesencriptado = "";
    let i = 0;
    while (i < texto.length) {
        switch (true) {
            case texto.startsWith("ai", i):
                textoDesencriptado += "a";
                i += 2;
                break;
            case texto.startsWith("enter", i):
                textoDesencriptado += "e";
                i += 5;
                break;

            case texto.startsWith("imes", i):
                textoDesencriptado += "i";
                i += 4;
                break;

            case texto.startsWith("ober", i):
                textoDesencriptado += "o";
                i += 4;
                break;

            case texto.startsWith("ufat", i):
                textoDesencriptado += "u";
                i += 4;
                break;
            default:
                textoDesencriptado += texto[i];
                i++;
        }
    }
    return textoDesencriptado;
}

// ------------------ Copiar

function mostrarAlerta() {
    alerta.style.display = "block";
    setTimeout(function() {
        alerta.style.display = "none";
    }, 3000);
}