let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

let manoUsuaria = document.querySelector(".mano-usuaria");

const eleccionCompu = () => {
  let numeroAlAzar = Math.floor(Math.random() * 3);
};

botonPiedra.onclick = () => {
  manoUsuaria.src = "./assets/piedra_ada.png";
};

botonPapel.onclick = () => {
  manoUsuaria.src = "./assets/papel_ada.png";
};

botonTijera.onclick = () => {
  manoUsuaria.src = "./assets/tijera_ada.png";
};
