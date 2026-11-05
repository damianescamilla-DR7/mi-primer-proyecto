document.addEventListener("DOMContentLoaded", () => {

    console.log("JavaScript conectado correctamente");

    // ==============================
    // CONTENIDO ADMINISTRABLE
    // ==============================

    const titulo = document.querySelector("h1");
    const subtitulo = document.querySelector("h2");
    const mensaje = document.querySelector("main > p");

    const tituloGuardado = localStorage.getItem("tituloPagina");
    const subtituloGuardado = localStorage.getItem("subtituloPagina");
    const mensajeGuardado = localStorage.getItem("mensajePagina");

    if (tituloGuardado) {
        titulo.textContent = tituloGuardado;
    }

    if (subtituloGuardado) {
        subtitulo.textContent = subtituloGuardado;
    }

    if (mensajeGuardado) {
        mensaje.textContent = mensajeGuardado;
    }

    // ==============================
    // CONTADOR
    // ==============================

    const boton = document.getElementById("participarBtn");
    const contadorTexto = document.getElementById("contador");

    let contador = localStorage.getItem("contadorParticipaciones") || 0;

    contadorTexto.textContent =
        "Veces que has mostrado el mensaje: " + contador;

    boton.addEventListener("click", () => {

        contador++;

        localStorage.setItem(
            "contadorParticipaciones",
            contador
        );

        contadorTexto.textContent =
            "Veces que has mostrado el mensaje: " + contador;

        alert(
            "¡Gracias por querer participar! Dios sigue restaurando vidas."
        );
    });

    // ==============================
    // CONOCE MÁS
    // ==============================

    const conoceMas = document.getElementById("conoceMas");
    const informacionExtra =
        document.getElementById("informacionExtra");

    if (conoceMas && informacionExtra) {

        conoceMas.addEventListener("click", (evento) => {

            evento.preventDefault();

            if (informacionExtra.style.display === "none") {

                informacionExtra.style.display = "block";
                conoceMas.textContent = "Mostrar menos";

            } else {

                informacionExtra.style.display = "none";
                conoceMas.textContent = "Conoce más";
            }
        });
    }

});