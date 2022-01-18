alert("Hola mundo!")/*ventana emergente*/
console.log("Estamos en la consola")/*para ver variables*/

let nombre = "Alejo Ponce"; /*tipo string*/
var numero = 10;/*numerica*/
const PI = 3.1416;
let hayClases = true;
console.log((numero + 25) + " " + nombre)/*+ concatena*/
console.log(hayClases)
console.log(5 > 3)/*imprime true*/
/*Condicionales*/
if (5 > 3) {
    console.log("es correcto")
} else {
    console.log("no es correcto")
}
if (hayClases == true) {
    console.log("me conecto")
} else {
    console.log("no me conecto")
}
/*operadores 
== && != ||
*/
let saludo = "Hola, como estas? ";
let saludar = saludo + nombre;
console.log(saludar)

let elemento = document.getElementById("principal");
// console.log(elemento)

elemento.innerHTML = "<h1 class='text-center bg-info'>"+ saludar +"</h1>"
elemento.documentWrite("<h1 class='text-center bg-info'>"+ saludar +"</h1>")