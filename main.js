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

    // Llama a la función de animación de los novios
    initWalkingCoupleAnimation();

    // Llama a la funcion de animacion del carrucel
    initGodparentsCarousel();

    // Llamar a la funcion de animacion de galeria
    initGalleryAnimations();
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

// Función para las animaciones de la galería al hacer scroll
function initGalleryAnimations() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (galleryItems.length === 0) {
        console.warn("No se encontraron elementos de galería para animar.");
        return;
    }

    // Aplica las clases iniciales (from-left o from-right) y el estado oculto
    galleryItems.forEach((item, index) => {
        if (index % 2 === 0) { // Elementos pares (0, 2, 4...)
            item.classList.add('from-left');
            item.classList.add('even-item'); // Clase auxiliar para JS
        } else { // Elementos impares (1, 3, 5...)
            item.classList.add('from-right');
            item.classList.add('odd-item'); // Clase auxiliar para JS
        }
        // No añadimos 'fade-in' aquí, solo las clases iniciales para que comiencen ocultas
    });

    // Opciones para el Intersection Observer
    const observerOptions = {
        root: null, // Observa el viewport como raíz
        rootMargin: '0px', // Sin margen adicional
        threshold: 0.05 // Cuando el 10% del elemento es visible, activa la animación
    };

    // Callback que se ejecuta cuando los elementos cruzan el umbral de visibilidad
    const observerCallback = (entries) => { // 'observer' ya no es necesario aquí
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible, activa la animación final
                entry.target.classList.add('fade-in');
                // Al entrar en vista, removemos las clases de "entrada" para que 'fade-in' tome el control
                entry.target.classList.remove('from-left', 'from-right');
            } else {
                // Si el elemento NO es visible (salió de la vista)
                entry.target.classList.remove('fade-in'); // Oculta la imagen
                // Reintroduce las clases de "entrada" para que vuelva a animarse al entrar
                if (entry.target.classList.contains('even-item')) {
                    entry.target.classList.add('from-left');
                } else if (entry.target.classList.contains('odd-item')) {
                    entry.target.classList.add('from-right');
                }
            }
        });
    };

    // Crea el Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada elemento de la galería
    galleryItems.forEach(item => {
        observer.observe(item);
    });
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

// Función para inicializar el carrusel de padrinos con navegación manual, puntos y auto-play
function initGodparentsCarousel() {
    const godparentsList = document.getElementById('godparentsCarousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const paginationContainer = document.getElementById('godparentsPagination');

    if (!godparentsList || !prevButton || !nextButton || !paginationContainer) {
        console.warn("Algunos elementos del carrusel de padrinos no se encontraron.");
        return;
    }

    const originalItems = Array.from(godparentsList.children);
    const numOriginalItems = originalItems.length;
    let currentIndex = 0; // Índice del elemento original visible en la primera posición
    let itemWidth = 0; // Se calculará dinámicamente
    let autoPlayInterval; // Variable para el intervalo de auto-reproducción

    // --- Preparación para el bucle infinito suave ---
    // Clona los elementos para crear el efecto de bucle.
    // Clona un número suficiente de ítems al principio y al final para evitar saltos
    const itemsToClone = numOriginalItems; // Para asegurar que haya suficientes clones para un bucle fluido

    for (let i = 0; i < itemsToClone; i++) {
        godparentsList.appendChild(originalItems[i].cloneNode(true)); // Clona del inicio al final
    }
    for (let i = numOriginalItems - 1; i >= numOriginalItems - itemsToClone; i--) {
        godparentsList.prepend(originalItems[i].cloneNode(true)); // Clona del final al inicio
    }

    // Actualiza la referencia a todos los ítems (originales + clones)
    const allCarouselItems = Array.from(godparentsList.children);
    const totalItems = allCarouselItems.length;

    // --- Funciones de Utilidad y Lógica del Carrusel ---

    function updateItemWidth() {
        if (allCarouselItems.length > 0) {
            const itemStyle = getComputedStyle(allCarouselItems[0]);
            // Ancho del ítem + margen izquierdo + margen derecho
            itemWidth = allCarouselItems[0].offsetWidth + parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);
        }
    }

    function createPaginationDots() {
        paginationContainer.innerHTML = ''; // Limpia puntos existentes
        for (let i = 0; i < numOriginalItems; i++) {
            const dot = document.createElement('span');
            dot.classList.add('pagination-dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoPlay(); // Reinicia el auto-play al interactuar manualmente
            });
            paginationContainer.appendChild(dot);
        }
    }

    function updatePaginationDots() {
        const dots = paginationContainer.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToSlide(index, smooth = true) {
        currentIndex = index;

        // Calcular el desplazamiento basado en el índice real dentro de la lista extendida
        // Queremos mostrar el elemento original en la posición `itemsToClone + currentIndex`
        const targetOffset = -(itemsToClone + currentIndex) * itemWidth;

        if (!smooth) {
            godparentsList.classList.add('no-transition');
        }
        godparentsList.style.transform = `translateX(${targetOffset}px)`;

        // Si se desactivó la transición, volver a activarla después de un breve momento
        if (!smooth) {
            setTimeout(() => {
                godparentsList.classList.remove('no-transition');
            }, 50);
        }

        updatePaginationDots();
    }

    // --- Lógica del bucle infinito real ---
    // Esta función se llama al final de cada transición para "resetear" la posición
    // a los clones correspondientes, haciendo el bucle imperceptible.
    function handleTransitionEnd() {
        // Obtenemos la posición actual de transform.
        // Convertimos la matriz de transformación a un valor de translateX
        const currentTransform = new DOMMatrixReadOnly(getComputedStyle(godparentsList).transform).m41;

        // Si estamos en una de las copias del final (adelante)
        // Ejemplo: Si tenemos A B C (originales) A' B' C' (clones)
        // Y el carrusel se mueve a A', reiniciamos a A (posición original) sin transición.
        if (currentIndex >= numOriginalItems) {
            currentIndex = 0; // Volver al primer elemento original
            goToSlide(currentIndex, false); // Mover sin transición
        }
        // Si estamos en una de las copias del inicio (retrocediendo)
        // Ejemplo: Si tenemos A'' B'' C'' (clones) A B C (originales)
        // Y el carrusel se mueve a C'', reiniciamos a C (último original) sin transición.
        else if (currentIndex < 0) {
            currentIndex = numOriginalItems - 1; // Volver al último elemento original
            goToSlide(currentIndex, false); // Mover sin transición
        }

        // Después del reset, se asegura que el punto activo sea el correcto
        updatePaginationDots();
    }

    // --- Auto-play Lógica ---
    function startAutoPlay() {
        // Limpiar cualquier intervalo existente para evitar duplicados
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1); // No usamos % numOriginalItems aquí directamente
            goToSlide(currentIndex); // El handleTransitionEnd se encargará del bucle
        }, 3000); // Mueve cada 3 segundos (ajusta este valor)
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }


    // --- Manejadores de Eventos ---

    nextButton.addEventListener('click', () => {
        currentIndex++;
        goToSlide(currentIndex);
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        goToSlide(currentIndex);
        resetAutoPlay();
    });

    // Escucha el fin de la transición para manejar el bucle infinito
    godparentsList.addEventListener('transitionend', handleTransitionEnd);

    // Opcional: Pausar auto-play al pasar el mouse
    godparentsList.parentElement.addEventListener('mouseenter', stopAutoPlay);
    godparentsList.parentElement.addEventListener('mouseleave', startAutoPlay);


    // --- Inicialización ---
    updateItemWidth();
    createPaginationDots();

    // Posicionar el carrusel para que muestre el primer elemento original correctamente
    // Esto lo hacemos al inicio sin transición
    goToSlide(0, false);

    // Iniciar el auto-play
    startAutoPlay();


    // Re-calcula y re-posiciona en resize para responsividad
    window.addEventListener('resize', () => {
        updateItemWidth();
        goToSlide(currentIndex, false); // Reposiciona instantáneamente
    });
}

// Función para la animación de los novios caminando
function initWalkingCoupleAnimation() {
    const groom = document.getElementById('groomWalking');
    const bride = document.getElementById('brideWalking');
    const walkingCoupleContainer = document.querySelector('.walking-couple-container');
    const triggerSection = document.getElementById('yourTargetSectionId'); // ¡Ahora es la sección de Código de Vestimenta!

    if (!groom || !bride || !walkingCoupleContainer || !triggerSection) {
        console.warn("Elementos de animación de novios no encontrados. Asegúrate de que los IDs y clases sean correctos y la sección de encuentro exista.");
        return;
    }

    const initialOffset = 50; // Distancia inicial desde los bordes de la ventana (en px)

    function animateCouple() {
        const scrollY = window.scrollY || window.pageYOffset;

        const triggerSectionRect = triggerSection.getBoundingClientRect();
        // triggerSectionTop es la distancia desde el TOP del documento hasta el inicio de la sección
        const triggerSectionTop = triggerSectionRect.top + window.scrollY;
        const triggerSectionHeight = triggerSection.offsetHeight;

        // Definimos el punto de inicio y fin de la "caminata" y "encuentro"
        // Empiezan a moverse cuando la sección de vestimenta está a 80% de la altura de la ventana desde abajo
        const startMeetingPointScroll = triggerSectionTop - window.innerHeight * 0.8;
        // Se encuentran completamente cuando la parte inferior de la sección de vestimenta entra en la vista
        const endMeetingPointScroll = triggerSectionTop + triggerSectionHeight - window.innerHeight * 0.2;
        // Opcional: un punto donde dejan de ser fijos y se "enganchan" a la sección
        const detachPointScroll = triggerSectionTop + triggerSectionHeight - (walkingCoupleContainer.offsetHeight / 2);


        // --- Lógica de la animación ---

        // 1. Antes del inicio de la caminata: Fijos y separados
        if (scrollY < startMeetingPointScroll) {
            groom.style.transform = `translateX(${initialOffset}px)`;
            bride.style.transform = `translateX(-${initialOffset}px)`;
            walkingCoupleContainer.style.position = 'fixed';
            walkingCoupleContainer.style.bottom = '0';
            walkingCoupleContainer.style.top = 'auto'; // Asegurarse de que top no esté configurado
            walkingCoupleContainer.style.transform = 'translateY(0)'; // No hay movimiento vertical
        }
        // 2. Durante la caminata y encuentro: Fijos y acercándose
        else if (scrollY >= startMeetingPointScroll && scrollY < detachPointScroll) {
            // Calcula el progreso de acercamiento
            const approachProgress = Math.min(1, (scrollY - startMeetingPointScroll) / (endMeetingPointScroll - startMeetingPointScroll));
            const moveDistance = (window.innerWidth / 2) - groom.offsetWidth - initialOffset - 20; // Ajusta 20px para el espacio entre ellos
            // Calcular cuánto se mueven desde initialOffset hacia el centro
            const currentMove = moveDistance * approachProgress;

            groom.style.transform = `translateX(${initialOffset + currentMove}px)`;
            bride.style.transform = `translateX(-${initialOffset + currentMove}px)`;

            walkingCoupleContainer.style.position = 'fixed';
            walkingCoupleContainer.style.bottom = '0';
            walkingCoupleContainer.style.top = 'auto';
            walkingCoupleContainer.style.transform = 'translateY(0)'; // Todavía no suben
        }
        // 3. Después del encuentro y subida con la página: Posición absoluta
        else {
            // Se aseguran de que estén en la posición final de encuentro
            const finalMoveDistance = (window.innerWidth / 2) - groom.offsetWidth - initialOffset - 20; // La misma distancia final
            groom.style.transform = `translateX(${initialOffset + finalMoveDistance}px)`;
            bride.style.transform = `translateX(-${initialOffset + finalMoveDistance}px)`;

            // Calcular la posición vertical para que se "peguen" a la sección
            // Quieres que la *parte inferior* del contenedor de los novios se alinee
            // con la parte superior de la sección de destino.
            const newTopPosition = triggerSectionTop - walkingCoupleContainer.offsetHeight;

            walkingCoupleContainer.style.position = 'absolute';
            walkingCoupleContainer.style.bottom = 'auto'; // Quitar el bottom para que 'top' funcione
            walkingCoupleContainer.style.top = `${newTopPosition}px`;
            walkingCoupleContainer.style.transform = 'translateY(0)'; // Resetear cualquier transformación de traslación
        }
    }

    // Ejecuta la función al cargar y en cada scroll
    window.addEventListener('scroll', animateCouple);
    // Ejecuta una vez para posicionar las imágenes correctamente al cargar la página
    animateCouple();

    // Re-ejecuta en redimensionamiento para ajustar las posiciones
    window.addEventListener('resize', animateCouple);
}