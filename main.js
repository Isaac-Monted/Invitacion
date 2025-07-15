// constantes
const Fecha_boda = '8 de Noviembre';

// Escucha el evento de carga del DOM
document.addEventListener("DOMContentLoaded", () => {
    colocarHistoria1();
    colocarHistoria2();
    generarLuciernagas(); // Función para generar luciérnagas

    // Crear contenedor si no existe
    if (!document.getElementById('contador')) {
        const contadorDiv = document.createElement('div');
        contadorDiv.id = 'contador';
        document.getElementById('Contenedor_corazon').appendChild(contadorDiv);
    }
    
    actualizarContador(); // Función para actualizar el contador
    setInterval(actualizarContador, 1000);
});

function colocarHistoria1() {
    const $Historia = `La historia que te voy a contar es muy especial, ya que se trata de un amor que empezo con una coincidencia o un accidente que conectarioa a dos personas que habian perdido la esperanza en el amor. pero todo esto cambiaria un 26 de diciembre cuando dos desconocidos se encontrarian el uno al otro sin pensar que llegarían a ser tan importantes el uno para el otro. Fue amor a primera vista, cada vez que ellos dos estaban juntos hacian del lugar algo unico, sin importar donde o cuando, su compañia era mas que suficiente.<br> No paso mucho tiempo cuando un 28 de enero decidirian por fin estar juntos<br>`;

    const contenedor = document.getElementById("Historia"); // Selecciona el contenedor
    const elementoP = document.createElement("p"); // Crea un elemento <p>
    elementoP.innerHTML  = $Historia; // Asigna el texto almacenado en la variable
    contenedor.appendChild(elementoP); // Añade el párrafo al contenedor
};

function colocarHistoria2() {
    const $Historia = `Y desde hay empezaria a escribirse un sin fin de historias y momentos inolvidables, un 26 de enero tomarian la decision de formalizar el compromiso pasando se ser novios a ser marido y mujer. Han pasado por muchos obstaculos y aunque no ha sido facil llegar a este punto, hay algo de lo que si estoy seguro, su amor es increbrantable y realmente quieren permanecer juntos por el resto de sus vidas. <br> desafortunadamente no te podre contar que es lo que sigue en esta historia ya que aun se esta escribiendo, pero si te puedes ser participe de ella este ${Fecha_boda} que sera el comienzo de un nuevo capitulo para estas dos personitas que se juraran amor eterno hasta que la muerte los separe.`;

    const contenedor = document.getElementById("Historia2"); // Selecciona el contenedor
    const elementoP = document.createElement("p"); // Crea un elemento <p>
    elementoP.innerHTML  = $Historia; // Asigna el texto almacenado en la variable
    contenedor.appendChild(elementoP); // Añade el párrafo al contenedor
};

// Función para generar luciérnagas automáticamente
function generarLuciernagas() {
    const contenedor = document.getElementById("contenedor-luciernagas");
    const numeroDeLuciernagas = 25;
    const contador = document.getElementById('contador');

    for (let i = 0; i < numeroDeLuciernagas; i++) {
        const luciernaga = document.createElement('div');
        luciernaga.classList.add('luciernaga');

        // Posición inicial aleatoria
        luciernaga.style.left = `${Math.random() * 100}%`;
        luciernaga.style.top = `${Math.random() * 100}%`;

        // Tamaño y opacidad aleatorios
        const size = Math.random() * 6 + 8; // Entre 8px y 14px
        luciernaga.style.width = `${size}px`;
        luciernaga.style.height = `${size}px`;
        luciernaga.style.opacity = Math.random() * 0.6 + 0.3; // Entre 0.3 y 0.9

        // Brillo base (para todas)
        luciernaga.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
        luciernaga.style.boxShadow = `0 0 ${size}px ${size/2}px rgba(255, 255, 255, 0.3)`;

        // Efecto especial (30% de probabilidad)
        if (Math.random() > 0.7) {
            luciernaga.style.width = `${size + 5}px`; // Tamaño extra
            luciernaga.style.height = `${size + 5}px`;
            luciernaga.style.boxShadow = `0 0 20px 10px rgba(255, 255, 255, 0.7)`; // Brillo intenso
        }

        // Animación (¡conserva tus keyframes originales!)
        const duration = Math.random() * 10 + 5;
        luciernaga.style.animation = `volar ${duration}s infinite ease-in-out`;
        luciernaga.style.animationDelay = `${Math.random() * 5}s`;

        contenedor.appendChild(luciernaga);
    }
}

// Funcion para el contador
function actualizarContador() {
    const fechaBoda = new Date('2025-11-08T15:00:00'); // Fecha y hora de tu boda
    const ahora = new Date();
    
    // Diferencia en milisegundos
    let diferencia = fechaBoda - ahora;
    const unDiaEnMs = 1000 * 60 * 60 * 24;
    
    // Evitar números negativos (si ya pasó la fecha)
    if (diferencia < 0) {
         // Si ya pasó más de un día
        if (Math.abs(diferencia) >= unDiaEnMs) {
            contador.innerHTML = `
                <span class="mensaje-agradecimiento">
                    ¡Gracias por haber sido parte de nuestro día especial! 💖<br>
                    <small>15 de Noviembre 2025</small>
                </span>
            `;
        }
        // Si es el día de la boda
        else {
            contador.innerHTML = `
                <span class="mensaje-boda">
                    ¡Hoy es el gran día! 💍<br>
                    <small>¡Estamos celebrando nuestro amor!</small>
                </span>
                
            `;
        }
        return;
    }
    
    // Cálculo de días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    diferencia -= dias * (1000 * 60 * 60 * 24);
    
    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    diferencia -= horas * (1000 * 60 * 60);
    
    const minutos = Math.floor(diferencia / (1000 * 60));
    diferencia -= minutos * (1000 * 60);
    
    const segundos = Math.floor(diferencia / 1000);
    
    // Mostrar el resultado
    document.getElementById('contador').innerHTML = `
        <div class="contador-item">
            <span class="contador-numero">${dias}</span>
            <span class="contador-etiqueta">días</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${horas}</span>
            <span class="contador-etiqueta">horas</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${minutos}</span>
            <span class="contador-etiqueta">min</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${segundos}</span>
            <span class="contador-etiqueta">seg</span>
        </div>
    `;
}