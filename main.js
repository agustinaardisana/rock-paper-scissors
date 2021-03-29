let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

let manoUsuaria = document.querySelector(".mano-usuaria");
let manoCompu = document.querySelector(".mano-computadora");

let resultado = document.querySelector(".resultado");
let puntajeUsuario = document.querySelector(".puntaje-usuaria p");
let puntajeComputadora = document.querySelector(".puntaje-computadora p");
let tablero = document.querySelector(".tablero");

let eleccionUsuario = "";
let eleccionComputadora = "";
let contadorPuntajeUsuaria = 0;
let contadorPuntajeComputadora = 0;

const eleccionCompu = () => {
  let numeroAlAzar = Math.floor(Math.random() * 3);

  if (numeroAlAzar == 0) {
    eleccionComputadora = "piedra";
    manoCompu.src = "./assets/piedra_computadora.png";
  } else if (numeroAlAzar == 1) {
    eleccionComputadora = "papel";
    manoCompu.src = "./assets/papel_computadora.png";
  } else {
    eleccionComputadora = "tijera";
    manoCompu.src = "./assets/tijera_computadora.png";
  }
};

const compararElecciones = () => {
  if (eleccionUsuario == "piedra") {
    if (eleccionComputadora == "piedra") {
      resultado.textContent = "¡Empate!";
    } else if (eleccionComputadora == "papel") {
      resultado.textContent = "Perdiste :(";
      contadorPuntajeComputadora++;
      puntajeComputadora.textContent = contadorPuntajeComputadora;
    } else {
      resultado.textContent = "Ganaste :)";
      contadorPuntajeUsuaria++;
      puntajeUsuario.textContent = contadorPuntajeUsuaria;
    }
  } else if (eleccionUsuario == "papel") {
    if (eleccionComputadora == "papel") {
      resultado.textContent = "¡Empate!";
    } else if (eleccionComputadora == "piedra") {
      resultado.textContent = "Ganaste :)";
      contadorPuntajeUsuaria++;
      puntajeUsuario.textContent = contadorPuntajeUsuaria;
    } else {
      resultado.textContent = "Perdiste :(";
      contadorPuntajeComputadora++;
      puntajeComputadora.textContent = contadorPuntajeComputadora;
    }
  } else {
    if (eleccionComputadora == "tijera") {
      resultado.textContent = "¡Empate!";
    } else if (eleccionComputadora == "papel") {
      resultado.textContent = "Ganaste :)";
      contadorPuntajeUsuaria++;
      puntajeUsuario.textContent = contadorPuntajeUsuaria;
    } else {
      resultado.textContent = "Perdiste :(";
      contadorPuntajeComputadora++;
      puntajeComputadora.textContent = contadorPuntajeComputadora;
    }
  }
};

botonPiedra.onclick = () => {
  manoUsuaria.src = "./assets/piedra_ada.png";
  manoCompu.src = "./assets/piedra_computadora.png";
  resultado.textContent = "🤨";
  tablero.classList.add("jugando");

  setTimeout(() => {
    eleccionUsuario = "piedra";
    manoUsuaria.src = "./assets/piedra_ada.png";
    eleccionCompu();
    compararElecciones();
    tablero.classList.remove("jugando");
  }, 2000);
};

botonPapel.onclick = () => {
  manoUsuaria.src = "./assets/piedra_ada.png";
  manoCompu.src = "./assets/piedra_computadora.png";
  resultado.textContent = "🤨";
  tablero.classList.add("jugando");

  setTimeout(() => {
    eleccionUsuario = "papel";
    manoUsuaria.src = "./assets/papel_ada.png";
    eleccionCompu();
    compararElecciones();
    tablero.classList.remove("jugando");
  }, 2000);
};

botonTijera.onclick = () => {
  manoUsuaria.src = "./assets/piedra_ada.png";
  manoCompu.src = "./assets/piedra_computadora.png";
  resultado.textContent = "🤨";
  tablero.classList.add("jugando");

  setTimeout(() => {
    eleccionUsuario = "tijera";
    manoUsuaria.src = "./assets/tijera_ada.png";
    eleccionCompu();
    compararElecciones();
    tablero.classList.remove("jugando");
  }, 2000);
};
