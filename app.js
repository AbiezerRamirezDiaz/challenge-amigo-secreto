// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Capturar el valor del campo de entrada:
let listaDeAmigos = [];
//Validar la entrada:
function agregarAmigo() {
let entradaDeAmigo = document.getElementById("amigo");
let nombreDeAmigo = entradaDeAmigo.value.trim();
if (nombreDeAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
}
//Actualizar el array de amigos:
listaDeAmigos.push(nombreDeAmigo);
entradaDeAmigo.value = "";

//Limpiar el campo de entrada:
entradaDeAmigo.value = "";
//Actualizar la visualización:
let listaHTML = document.getElementById("listaAmigos");
let nuevoItem = document.createElement("li");
nuevoItem.textContent = nombreDeAmigo;
listaHTML.appendChild(nuevoItem);
}
