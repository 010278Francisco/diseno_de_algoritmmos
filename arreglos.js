/**
 Coleccion de elementos
 Tienen metodoso o funciones que ns permiten ordenar o 
 manipular los datos almacenados
 */

//mANERAS DE DECLARAR UN ARREGLO
//MANERA 1
 const arreglo1 = [4, "Hola", true, [1,2,6]];
 console.log(arreglo1)


//MANERA 2
 const arreglos2 = Array.of(1, "Hola", true );
 console.log(arreglos2);


 //mANERA 3;
 const arreglo3 = new Array(3, true, "adios");
 console.log(arreglo3);


 const frutas =["Manzanas", "Naranjas", "Uvas", "Sandias",
                [1,2,3,4,5,['A', 'B', 'C']]];
 console.log(frutas[1]);
 console.log(frutas[3]);
 console.log(frutas[4]);
 console.log(frutas[4][4]);
 console.log(frutas[4][5][1]);

 //METODOS

 /*Metodo lenght = la longitud del arreglo */

 const letra = ["A", "B", "C", "D", "E"];
 console.log(letra.length);


 /* Metodo push = Añade un elemento al final de nuestro
    Arreglo */

    letra.push("F")
    console.log(letra)
    console.log(letra.length)

 /* Metodo pop = elimina el ultimo elemento de nuestro
    Arreglo */

    letra.pop();
    console.log(letra);


/* Metodo unshif = agrega el ultimo elemento al inicio a nuestro
    Arreglo */

    letra.unshift(1);
    console.log(letra);

/* Metodo unshif = Elimina el primer elemento a nuestro
    Arreglo */

    letra.shift();
    console.log(letra);

