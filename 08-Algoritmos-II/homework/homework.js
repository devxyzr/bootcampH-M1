"use strict";
// No cambies los nombres de las funciones.

let array = [5, 1, 4, 2, 8];

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // if (array.length <= 1) {
  //   return array;
  // }
  // let left = [];
  // let rigth = [];
  // let aux = [];
  // let pivot = array.pop();
  // let n = array.length;

  // for (let i = 0; i < n; i++) {
  //   if (array[i] <= pivot) {
  //     left.push(array[i]);
  //   } else {
  //     rigth.push(array[i]);
  //   }
  // }
  // return aux.concat(quickSort(left), pivot, quickSort(rigth));

  //----------------------------------------------------------------

  // Caso corte | caso base

  if (array.length <= 1) return array;

  // Definir pivot, separar el left y el rigth

  let pivot = array[0]; // EL primer numero del array
  let left = []; // Array vacio
  let rigth = []; // Array vacio

  // Recorrer el array -> Se empieza desde la posicion #1 porque el pivot esta desde la poscion 0, si el pivot cambiara de posicion tedriamos que rescorrerlo de otra manera.

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      // Si el array en posicion I es mayor al pivot -> se agrega al array
      rigth.push(array[i]); // Sube al arry
    } else {
      left.push(array[i]); // En caso contrario, es decir en menor que le pivot se sube al array de la izquierda
    }
  }

  // Una vez terminado el for el array left y rigth van a contener elementos left = [x,x,x,x] rigt = [x,x,x,x]
  // RECURSION, se debe volver a pasar por la funcion al los array left y rigth, tambien se debe agregar el pivot en la posicion correcta.

  return quickSort(left).concat(pivot).concat(quickSort(rigth));
}
//------------------------------------------------------------------------

// Merge -> Hace la segunda parte de uniendo los arrays

function merge(left, rigth) {
  let leftIndex = 0; // Iterador i
  let rigthIndex = 0; // Iterador j
  let arrayOrder = []; // Se entrega el nuevo arreglo ordenado

  while (leftIndex < left.length && rigthIndex < rigth.length) {
    // Mientras los dos indices esten dentro del rango va seguir iterando el arreglo
    if (left[leftIndex] < rigth[rigthIndex]) {
      // A donde esta el indice del el arreglo left en menor que donde esta el indice del arreglo rigth
      arrayOrder.push(left[leftIndex]); // Pucheo el numero menor dentro de el array order
      leftIndex++; // Si puecho el izquierdo paso al  siguiente numero
    } else {
      arrayOrder.push(rigth[rigthIndex]); // Pucheo el numnero menor dentro del array si no es el de la izquierda
      rigthIndex++; // Si pucheo el de la  derecha correo al sigiente numero
    }
  }
  return arrayOrder
    .concat(left.slice(leftIndex))
    .concat(rigth.slice(rigthIndex)); // Va a concatenar los que sobre del array de Left y Rigt y lo pondra al final del arreglo.
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante

  // Tu código:

  // Caso base || Caso corte

  if (array.length === 1) return array; // Si el array en menor a 1 devuelve el array -> Acaba la ejecicion

  // Dividir en 2 el array que es pasa por parametro de la funcion, se utiliza ( Math.floor ) para qe devuelva un numero enterno.

  let mid = Math.floor(array.length / 2);

  // Asignar los valores de la division de array a dos valores,

  let left = array.slice(0, mid); //(slice) = parte el arry || mid = a la mitad definida en la funcion de arriba
  let rigth = array.slice(mid); // (slice) = parte del array desde mid hasta el final del array

  // RECURSION -> Se utilizar un funcion fuera de

  return merge(mergeSort(left), mergeSort(rigth)); // La recursion sucede cuando estoy llamando de nuevo a la funcion
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
