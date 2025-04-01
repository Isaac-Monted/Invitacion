const $Historia = `Fue un 28 de diciembre cuando dos desconocidos de encontrarian el uno al otro sin pensar que llegarían a ser tan importantes el uno para el otro. Fue amor a primera vista, ya que cada que ellos dos estaban juntos hacian del lugar algo unico, sin importar donde o cuando, su compañia era mas que suficiente.
<br> No paso mucho tiempo cuando un 28 de enero decidirian `;

// Escucha el evento de carga del DOM
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("Historia"); // Selecciona el contenedor
    const elementoP = document.createElement("p"); // Crea un elemento <p>
    elementoP.innerHTML  = $Historia; // Asigna el texto almacenado en la variable
    contenedor.appendChild(elementoP); // Añade el párrafo al contenedor
});

