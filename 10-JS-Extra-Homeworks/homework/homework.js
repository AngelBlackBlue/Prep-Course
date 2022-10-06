// No cambies los nombres de las funciones.

const { checkIsBareRepoTask } = require("simple-git/src/lib/tasks/check-is-repo");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({ D: 1, B: 2, C: 3 }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  //console.log(objeto); 
  
  var matriz = []

  for (var key in objeto) {
    matriz.push([key, objeto[key]]);
  }

  //console.log(matriz);

  return matriz;
   
 }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  //console.log(string);
  
  var cantidadCaracteres = {};

  for (var i = 0 ; i < string.length ; i++) {

    if ( string[i] in cantidadCaracteres ) {
      cantidadCaracteres[string[i]]++;
    } else {
      cantidadCaracteres[string[i]]=1;
      
    }

     
  }
  
  //console.log(cantidadCaracteres);

  return cantidadCaracteres;



}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  //console.log(s);

  var minC = '';
  var mayC = '';

  for (var i = 0; i < s.length; i++) {
    
    if ( s[i] === s[i].toUpperCase() ) { 
      mayC = mayC + s[i];
    } else {
      minC = minC + s[i];
    }
    
  }
  
  //console.log(minC);

  //console.log(mayC);

  //console.log(mayC+minC);

  return mayC + minC;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //console.log(str);
  //console.log(str.split(' '));
  //console.log(str.split(' ').reverse());
  
  var palabras = str.split(' ');

  var girar = []

  for (var i = 0; i < palabras.length; i++) {
   
    girar.push(palabras[i].split('').reverse().join('')); 
   
  }

  //console.log(girar.join(' '));

  return girar.join(' ');

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  //console.log(numero);

  var nuevoString = numero.toString();

  var nuevoNumero = '';

  //console.log(nuevoString);

  for (var i = nuevoString.length - 1 ; i >= 0  ; i--) {

    nuevoNumero = nuevoNumero + nuevoString[i];
    
  }

  //console.log(nuevoNumero);

  if ( nuevoString === nuevoNumero ) {

    return 'Es capicua';
    
  } else {

    return 'No es capicua';
    
  }
    
}




function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  
  //console.log(cadena);

  var matriz = cadena.split('');

  //console.log(matriz);

  var nuevaCadena = ''

  for (var i = 0; i < matriz.length; i++) {
    
    if ( matriz[i] !== 'a' && matriz[i] !== 'b' && matriz[i] !== 'c' ) {

       nuevaCadena = nuevaCadena + matriz[i];
      
    }
    
  }

  //console.log(nuevaCadena);

  return nuevaCadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //console.log(arr);
  
  return arr.sort ( function (a , b) {

    return a.length - b.length;

  });

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  console.log(arreglo1);

  console.log(arreglo2);

  var nuevoMatriz = [];

  for (var x of arreglo1) {

    for (var y of arreglo2) {

      if ( x === y) {

        nuevoMatriz.push(y);
        
      }
      
    }
    
  }

  console.log(nuevoMatriz);

  return nuevoMatriz;


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

