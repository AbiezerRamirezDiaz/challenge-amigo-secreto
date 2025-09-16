// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Capturar el valor del campo de entrada:
let listaDeAmigos = [];
//Función para actualizar la visualización de la lista de amigos
function actualizarListaAmigos() {
    //Obtener el elemento de la lista:
    let listaHTML = document.getElementById("listaAmigos");
    //Limpiar la lista existente:
    listaHTML.innerHTML = "";
    //Iterar sobre el arreglo:
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        listaHTML.appendChild(item);
    }
}
// Función para agregar un amigo.
function agregarAmigo() {
    // Capturar el valor del campo de entrada y eliminar espacios innecesarios
    let entradaDeAmigo = document.getElementById("amigo");
    let nombreDeAmigo = entradaDeAmigo.value.trim();
    // Validar la entrada
    if (nombreDeAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    // Actualizar el array de amigos
    listaDeAmigos.push(nombreDeAmigo);
    // Limpiar el campo de entrada
    entradaDeAmigo.value = "";
    // Actualizar la visualización de la lista
    actualizarListaAmigos();
}
// Función para sortear un amigo
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

     // 4. Mostrar el resultado en el HTML junto con el GIF
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `
        <li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>
        <img src="assets/happy.gif" alt="Celebración" class="gif-felicidades">
    `;
}