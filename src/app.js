import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const palos = ["♦", "♥", "♠", "♣"];
  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  const CartaAleatoria = () => {
    const randomPalos = Math.floor(Math.random() * palos.length);
    const randomValores = Math.floor(Math.random() * valores.length);

    document.getElementsByClassName("arriba")[0].textContent = palos[randomPalos]
    document.getElementsByClassName("abajo")[0].textContent = palos[randomPalos]
    document.getElementsByClassName("centro")[0].textContent = valores[randomValores]
 
    const generar = document.getElementById("generar");

    if (palos[randomPalos] === "♦" || palos[randomPalos] === "♥") {
      document.getElementsByClassName("arriba")[0].style.color = "red";
      document.getElementsByClassName("abajo")[0].style.color = "red";
    }else {
      document.getElementsByClassName("arriba")[0].style.color = "black";
      document.getElementsByClassName("abajo")[0].style.color = "black";
    }
   
  }
  CartaAleatoria();
  
  generar.addEventListener('click', () => {
    CartaAleatoria();
  });

  setInterval(() => {
    CartaAleatoria();
  }, 5000);
};