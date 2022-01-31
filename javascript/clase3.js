//let nombre = prompt("Ingresá tu nombre");
let miDiv = document.getElementById("principal");
//miDiv.innerHTML="Hola "+nombre+"!";

let btn = document.getElementById("btn");
btn.addEventListener('click', sumar);//al hacer click llamamos a una funcion

//funciones
function sumar() {
    let num = parseInt(prompt("Ingresá 1° número: "));
    let num2 = parseInt(prompt("Ingresá 2° número: "));
    let operacion = prompt("Que operacion desea realizar? \n1.Sumar \n2.Restar \n3.Multiplicar \n4.Dividir");
    switch (operacion) {
        case '1':
            resultado = num + num2;
            miDiv.innerHTML += "<p>" + resultado + "</p>";
            break;
        case '2':
            resultado = num - num2;
            miDiv.innerHTML += "<p>" + resultado + "</p>";
            break;
        case '3':
            resultado = num * num2;
            miDiv.innerHTML += "<p>" + resultado + "</p>";
            break;
        case '4':
            if (num2 != 0){
                resultado = num / num2;
                miDiv.innerHTML += "<p>" + resultado + "</p>";
            }else{
                miDiv.innerHTML="No se puede dividir por 0";
            }
            break;

        default:
            miDiv.innerHTML = "Opcion incorrecta."
            break;
    }
}