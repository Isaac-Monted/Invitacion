// Escucha el evento de carga del DOM
document.addEventListener("DOMContentLoaded", () => {
    colocarHistoria1();
    generarLuciernagas(); // Función para generar luciérnagas
});

function colocarHistoria1() {
    const $Historia = `Fue un 28 de diciembre cuando dos desconocidos de encontrarian el uno al otro sin pensar que llegarían a ser tan importantes el uno para el otro. Fue amor a primera vista, ya que cada que ellos dos estaban juntos hacian del lugar algo unico, sin importar donde o cuando, su compañia era mas que suficiente.<br>`;

    const contenedor = document.getElementById("Historia"); // Selecciona el contenedor
    const elementoP = document.createElement("p"); // Crea un elemento <p>
    elementoP.innerHTML  = $Historia; // Asigna el texto almacenado en la variable
    contenedor.appendChild(elementoP); // Añade el párrafo al contenedor
};

function colocarHistoria2() {
    const $Historia = `No paso mucho tiempo cuando un 28 de enero decidirian<br>`;

    const contenedor = document.getElementById("Historia2"); // Selecciona el contenedor
    const elementoP = document.createElement("p"); // Crea un elemento <p>
    elementoP.innerHTML  = $Historia; // Asigna el texto almacenado en la variable
    contenedor.appendChild(elementoP); // Añade el párrafo al contenedor
};

// Función para generar luciérnagas automáticamente
function generarLuciernagas() {
    const contenedor = document.getElementById("contenedor-luciernagas"); // Selecciona el contenedor por id

     // Número de luciérnagas que quieres generar
     const numeroDeLuciernagas = 20;

    // Generar luciérnagas dinámicamente
    for (let i = 0; i < numeroDeLuciernagas; i++) {
        const luciernaga = document.createElement('div');
        luciernaga.classList.add('luciernaga');

        // Asignar un retraso de animación aleatorio para cada luciérnaga
        luciernaga.style.animationDelay = `${Math.random() * 5}s`;

        // Asignar posición aleatoria dentro del contenedor
        luciernaga.style.top = `${Math.random() * 100}%`;
        luciernaga.style.left = `${Math.random() * 100}%`;

        // Agregar la luciérnaga al contenedor
        contenedor.appendChild(luciernaga);
    }
}