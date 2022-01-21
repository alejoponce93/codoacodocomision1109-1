// alert("Hola mundo!")/*ventana emergente*/
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

let elemento = document.getElementById("principal"); //tomar ID de HTML
// console.log(elemento)

// elemento.innerHTML = "<h1 class='text-center bg-info'>"+ saludar +"</h1>"
// document.write("<h1 class='text-center bg-info'>"+ saludar +"</h1>")

document.write(`
    <div class="container"><div class="row" id="principal">
    <h1 class="text-center bg-info"> ${saludar} </h1></div></div>
`)

//let mensaje = prompt("Escribe el mensaje a enviar: ")
// let mensaje = prompt("1.Opcion. 1 \n2.Opcion 2. \n3.Opcion 3.")
// console.log(mensaje)

// elemento.innerHTML=mensaje;

// if (mensaje === "1"){
//     elemento.innerHTML="<p>Eligio opcion 1</p>"
// }else if (mensaje === "2"){
//     elemento.innerHTML="<p>Eligio opcion 2</p>"
// }else if (mensaje === "3"){
//     elemento.innerHTML="<p>Eligio opcion 3</p>"
// }else{
//     elemento.innerHTML="<p>Eligio opcion erronea.</p>"
// }

// switch (mensaje) { //switch case
//     case "1":
//         elemento.innerHTML="<p>Eligio opcion 1</p>"
//         break;
//     case "2":
//         elemento.innerHTML="<p>Eligio opcion 2</p>"
//         break;
//     case "3":
//         elemento.innerHTML="<p>Eligio opcion 3</p>"
//         break;
//     default:
//         elemento.innerHTML="<p>Eligio opcion erronea.</p>"
//         break;
// }

let num = parseInt(prompt("Ingrese primer numero:"));
let num2 = parseInt(prompt("Ingrese segundo numero:"));

let resultado = "<p>El resultado de "+ num + " y " + num2 +" es: "+ (num+num2) +"</p>"
console.log(resultado)

elemento.innerHTML = resultado;
