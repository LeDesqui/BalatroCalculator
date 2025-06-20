function generarCartas() {
    const contenedor = document.querySelector('.contenedorCartasParaJugar');
    const coords = generarCoords();

    coords.forEach((coordenada, index) => {
        let x = 1.5 * coordenada[0];
        let y = 1.5 * coordenada[1];
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.setAttribute('data-numero', index + 1);
        carta.style.backgroundPosition = `-${x}px -${y}px , -106.5px 0px`;
        console.log("carta " + `-${x}px -${y}px`);
        contenedor.appendChild(carta);
    });
}

function mostrarCartaSeleccion(numero, array) {
    let x = array[0];
    let y = array[1];
    let clase = document.getElementById("cartaSeleccionada");
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.style.backgroundPosition = `-${x}px -${y}px , -106.5px 0px`;
}


function generarCoords() {
    let coords = [];
    const alto = 95;
    const ancho = 71;
    let xInicial = 0;
    let yInicial = 0;
    let yFinal = alto;
    let xFinal = ancho;

    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 13; j++) {
            let cartaCoords = [xInicial, yInicial];
            xInicial += ancho;
            xFinal += ancho;
            coords.push(cartaCoords);
        }
        xInicial = 0;
        xFinal = ancho;
        yInicial += alto;
        yFinal += alto;
    }
    return coords;
}


function seleccionarCarta(numero) {
    console.log("Carta seleccionada: " + numero); // Depuración
    alert("Seleccionaste la carta " + numero);
}


function openCards() {
    let clase = document.getElementById("cartasJugar");
    if (clase.style.display === "none") {
        clase.style.display = "block";
        alert("Amo a End x333");
        clase.style.display = "grid";
        setTimeout(() => {
            clase.innerHTML = "";
            generarCartas();
        }, 50);
    } else {
        clase.style.display = "none";
    }

}




