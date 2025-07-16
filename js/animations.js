

export function AnimacionTarjetaEventos(){
    // Seleccionamos ambas tarjetas de evento
    const ceremonyCard = document.querySelector('.ceremony-card');
    const celebrationCard = document.querySelector('.celebration-card');

    if (!ceremonyCard || !celebrationCard) {
        console.warn("No se encontraron las tarjetas de evento. Asegúrate de que las clases 'ceremony-card' y 'celebration-card' estén correctamente aplicadas.");
        return;
    }

    // Al cargar la página, aplicamos las clases iniciales para ocultarlas y posicionarlas.
    // Usamos requestAnimationFrame para asegurar que los estilos se apliquen antes del primer render.
    requestAnimationFrame(() => {
        ceremonyCard.classList.add('from-left');
        ceremonyCard.classList.add('event-card-left'); // Clase auxiliar para el JS de Intersection Observer
        
        celebrationCard.classList.add('from-right');
        celebrationCard.classList.add('event-card-right'); // Clase auxiliar para el JS de Intersection Observer
    });

    // Opciones para el Intersection Observer
    const observerOptions = {
        root: null, // Observa el viewport como raíz
        rootMargin: '0px', // Sin margen adicional
        threshold: 0 // Cuando 1px del elemento es visible, o deja de serlo, activa
    };

    // Callback que se ejecuta cuando los elementos cruzan el umbral de visibilidad
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible (entra en la vista)
                entry.target.classList.add('fade-in');
                // Al entrar en vista, removemos las clases de "entrada" para que 'fade-in' tome el control
                entry.target.classList.remove('from-left', 'from-right');
            } else {
                // Si el elemento NO es visible (salió de la vista, ya sea por arriba o por abajo)
                entry.target.classList.remove('fade-in'); // Oculta la imagen
                // Reintroduce las clases de "entrada" para que vuelva a su posición original oculta
                if (entry.target.classList.contains('event-card-left')) { // Usamos la clase auxiliar
                    entry.target.classList.add('from-left');
                } else if (entry.target.classList.contains('event-card-right')) { // Usamos la clase auxiliar
                    entry.target.classList.add('from-right');
                }
            }
        });
    };

    // Crea el Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada tarjeta de evento
    observer.observe(ceremonyCard);
    observer.observe(celebrationCard);
}

export function AnimacionCodigoVestimenta() {
    const dressCodeItems = document.querySelectorAll('.dress-code-item');

    if (dressCodeItems.length === 0) {
        console.warn("No se encontraron elementos de código de vestimenta para animar.");
        return;
    }

    // Al cargar la página, aplicamos las clases iniciales para ocultarlos y posicionarlos.
    requestAnimationFrame(() => {
        dressCodeItems.forEach((item, index) => {
            if (index === 0) { // Primer item (Hombres)
                item.classList.add('from-left');
                item.classList.add('dress-item-left'); // Clase auxiliar para el JS de Intersection Observer
            } else if (index === 1) { // Segundo item (Mujeres)
                item.classList.add('from-right');
                item.classList.add('dress-item-right'); // Clase auxiliar para el JS de Intersection Observer
            }
            // Los títulos y subtítulos no necesitan animarse con from-left/right
            // Si quieres que el título y subtítulo también aparezcan, puedes observarlos por separado
            // o simplemente dejarlos que aparezcan con la sección.
        });
    });

    const observerOptions = {
        root: null, // Observa el viewport como raíz
        rootMargin: '0px', // Sin margen adicional
        threshold: 0.1 // Cuando el 10% del elemento es visible, o deja de serlo, activa.
                      // Ajustado a 0.1 para que la animación empiece un poco antes que el 0.
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible (entra en la vista)
                entry.target.classList.add('fade-in');
                // Removemos las clases de "entrada" para que 'fade-in' tome el control
                entry.target.classList.remove('from-left', 'from-right');
            } else {
                // Si el elemento NO es visible (salió de la vista)
                entry.target.classList.remove('fade-in'); // Oculta el item
                // Reintroduce las clases de "entrada" para que vuelva a su posición original oculta
                if (entry.target.classList.contains('dress-item-left')) {
                    entry.target.classList.add('from-left');
                } else if (entry.target.classList.contains('dress-item-right')) {
                    entry.target.classList.add('from-right');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada ítem de código de vestimenta
    dressCodeItems.forEach(item => {
        observer.observe(item);
    });
}