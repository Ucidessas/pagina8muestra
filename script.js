document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Gracias por contactarnos. ¡Te responderemos pronto!");
});

// Efecto de texto animado en el header
const headerText = document.querySelector('header h1');
let textArray = headerText.innerText.split("");
headerText.innerText = "";

textArray.forEach((letter, index) => {
    setTimeout(() => {
        headerText.innerText += letter;
    }, index * 150); // Agrega cada letra lentamente
});

