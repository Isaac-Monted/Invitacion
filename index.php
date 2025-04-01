<?php
// Supongamos que usamos un parámetro para decidir si mostrar el HTML
$mostrarHTML = true;

if ($mostrarHTML) {
    include 'index.html'; // Incluye el archivo HTML
} else {
    echo "<p>No se puede mostrar el contenido en este momento.</p>";
}
?>
