document.addEventListener("DOMContentLoaded", () => {

    console.log("Admin conectado correctamente");

    // ==============================
    // ELEMENTOS DEL ADMIN
    // ==============================

    const titulo = document.getElementById("titulo");
    const subtitulo = document.getElementById("subtitulo");
    const mensaje = document.getElementById("mensaje");

    const guardarBtn = document.getElementById("guardarBtn");
    const estado = document.getElementById("estado");


    // ==============================
    // CARGAR CONTENIDO ACTUAL
    // ==============================

    const tituloGuardado = localStorage.getItem("tituloPagina");
    const subtituloGuardado = localStorage.getItem("subtituloPagina");
    const mensajeGuardado = localStorage.getItem("mensajePagina");


    if (tituloGuardado) {
        titulo.value = tituloGuardado;
    }

    if (subtituloGuardado) {
        subtitulo.value = subtituloGuardado;
    }

    if (mensajeGuardado) {
        mensaje.value = mensajeGuardado;
    }


    // ==============================
    // GUARDAR CAMBIOS
    // ==============================

    guardarBtn.addEventListener("click", () => {

        localStorage.setItem(
            "tituloPagina",
            titulo.value
        );

        localStorage.setItem(
            "subtituloPagina",
            subtitulo.value
        );

        localStorage.setItem(
            "mensajePagina",
            mensaje.value
        );


        estado.textContent =
            "Cambios guardados correctamente.";

        console.log("Cambios guardados correctamente.");

    });

});