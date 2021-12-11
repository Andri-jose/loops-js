//pedir un numero y sumarle otro numero, realizando una salida en cada resultado
let edad = parseInt(prompt("Ingrese su edad (se indicara su edad de aqui a 20 años)"));
let año = parseInt(prompt("Ingrese el año actual (se indicara su edad de aqui a 20 años)"));

for (let i = 1; i <= 20; i++) {

    let resultado = edad + i;

    let fecha = año + i;

    let espacio = " ";

    alert(resultado + espacio + "años" + espacio + fecha);
}


//pedir un numero mediante prompt y concatenar en cada repeticion hasta q se ingresa ESC
let equipo = prompt("Ingrese el nombre de su equipo de futbol favorito (para salir escriba ESC)");

while (equipo != "ESC") {

    let espacio = " ";

    alert("Su equipo favorito es:" + espacio + equipo)

    equipo = prompt("Ingrese de nuevo el nombre de su equipo de futbol favorito (para salir escriba ESC)")
}



//Repetir mensaje Hola la cantidad de veces ingresada
let numero = parseInt(prompt("Ingrese un numero (se saludara las cantidad de veces ingresada)"));

for (let i = 1; i <= numero; i++) {
    
    alert("Hola");
}
