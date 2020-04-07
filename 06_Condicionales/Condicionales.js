// alert(‘Descarga ya!’)
// if(condicion){
//     bloque de codigo si se cumple
// }else{
//     bloque de codigo si no se cumple
// }
let num1 = 16
let num2 = '500'
//typeof es para saber que tipo de valor tiene la varible
// console.log(typeof(num2));
//-----operadores logicos------
// =  --> Da un valor
// == --> compara valores
// === --> compara identicos
//100
//if(num1 === '10' ){
//    console.log('Es verdad');
//}else{
//    console.log('No es verdad');
//}


if(num1 > 5) { 
    console.log('Es mayor que 5');
}else{
    console.log('Es menor que 5')
}

if(num1 %2 ===0 ) {
    console.log(num1 + ' Es par')
}else{
    console.log(num1 + ' Es impar')
}


//pase para conducir
//let preguntaedad= prompt("Ingresa tu edad");
//console.log(typeof(preguntaedad));

//let edad = Number(preguntaedad);
//console.log(typeof(edad));

//if(edad >=18 && edad <= 70){
//    console.log("puedes conducir");
//}else if(edad ===16 || edad ===17){
//    console.log("puedes sacar el permiso");
//}else if (edad < 16 || edad > 70){
//    console.log("No puedes sacar la licencia");
//} else{ 
//console.error("Datos incorrectos")
//};

//juego

let jugador1= prompt("Jugador 1: piedra, papel o tijeras?")
let jugador2= prompt("Jugador 2: piedra, papel o tijeras?")

if(jugador1=== "piedra" && jugador2==="piedra" || jugador1=== "papel" && jugador2==="papel" || jugador1=== "tijeras" && jugador2==="tijeras"){
    console.log("Empate");
}else if(jugador1=== "piedra" && jugador2==="tijeras" || jugador1=== "tijeras" && jugador2==="papel" || jugador1=== "papel" && jugador2==="piedra"){
    console.log("Jugador 1 gana");
}else if(jugador2=== "piedra" && jugador1==="tijeras" || jugador2=== "tijeras" && jugador1==="papel" || jugador2=== "papel" && jugador1==="piedra"){
    console.log("Jugador 2 gana");
} else{ 
    console.error("Datos incorrectos")
};
