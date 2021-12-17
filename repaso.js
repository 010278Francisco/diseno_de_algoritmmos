/**
 * 
 REPASO.JS




Function
bloque de codigo rutilizable

function nombre(parametros){
    return
}

//se hace llamar a la funcion 
nombre(argumentos)
 */

//Ejemplo

function procesadorDeFrutas(manzanas, naranjas){
    let jugo = "Jugo de " + manzanas + " Manzanas y " + naranjas + " naranjas.";
    return jugo; 

}

let jugoDeManzana = procesadorDeFrutas(4, 0);
console.log(jugoDeManzana);

let jugoDeNaranjas = procesadorDeFrutas(0, 5);
console.log(jugoDeNaranjas);
