console.log('Bootcamp 592066 - Grupo 18: Gustavo Minger - Emanuel Some');

let userName = prompt('Escribí tu nombre');
let userGender = prompt('Tu género? masculino, femenino o no-binario - Escribí todo en minúscula');


//Si responde masculino
if(userGender == 'masculino' || userGender == 'Masculino' || userGender == 'MASCULINO') {
    let message = `¡Bievenido ${userName}!`;
    console.log(` ${userName} esGy ${userGender}.`);
    console.log(message);
    alert(message);
} //Si responde femenino Gu
else if(userGender == 'femenino' || userGender == 'Femenino' || userGender == 'FEMENINO') {
    let message = `¡Bievenida a nuestra tienda ${userName}!`;
    console.log(`${userName} es ${userGender},`);
    console.log(message);
    alert(message);
    //Si es no-binario
} else if(userGender == 'No binario' || userGender == 'no binario' || userGender == 'No Binario' || userGender == 'NO BINARIO') {
    let message = `¡Weleome ${userName}!`;
    console.log(`El nombre de le persone usuarie es ${userName} y es ${userGender}.`);
    console.log(message);
    alert(message);
    //Si no pone nada, queda este saludo
} else {
    let message = `¡Hola ${userName}`;
    console.log(`${userName} prefiere no dar información sobre su identificación sexual.`);
    console.log(message);
    alert(message);
}



