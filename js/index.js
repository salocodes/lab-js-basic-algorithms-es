
console.log("!Estoy listo¡")

// Iteration 1: Names and Input

let hacker1 = "Peter";
console.log("El nombre del conductor es: ", hacker1);

let hacker2 = "Bob";
console.log("El nombre del navegante es:", hacker2);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
  } else {
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`);
  }
  

// Iteration 3: Loops

const formattedHacker1 = hacker1.toUpperCase().split('').join(' ');
console.log(`Nombre del conductor en mayúsculas y separado por espacios: ${formattedHacker1}`);

const reversedHacker2 = hacker2.split('').reverse().join('');
console.log(`Nombre del navegante en orden inverso: ${reversedHacker2}`);

if (hacker1 < hacker2) {
    console.log("El nombre del conductor va primero.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, el navegante va primero definitivamente.");
  } else {
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
  }