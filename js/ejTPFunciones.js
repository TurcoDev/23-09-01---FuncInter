/** Ej 1
 * ecuacion lineal
 * ax + by + c = 0
 * y = (-ax -c) / b
 **/

function solveLinEquation(a, b, c, x) {
  let y = (-a*x - c) / b;
  return y;
}

let a = 5;
let b = 8;
let c = 10;
// let x = 20;
// 5x + 8y + 10 = 0



// Intro manipulacion del DOM
let listaPuntos = document.getElementById("puntos");
console.log(listaPuntos);
// listaPuntos.innerHTML = '<li> Hola </li>';

let y;
for (let x = 1; x <= 50; x++) {
  y = solveLinEquation(a, b, c, x);
  listaPuntos.innerHTML += `<li>Punto (${x}, ${y})</li>`;
}

// Otras maneras que utilizaremos mas adelante
let lista;
lista = document.getElementsByClassName('color');
console.log(lista);