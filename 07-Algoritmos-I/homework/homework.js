"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let factorNum = [1];
  let divisor = 2;

  while (num >= divisor) {
    if (num % divisor === 0) {
      factorNum.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factorNum;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  const l = array.length;
  let j, temp;

  for (let i = 1; i < l; i++) {
    j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  const list = [...array]; // Copia el array original
  const len = list.length; // Asigna varible y esta va contar el tamaño del array
  for (let i = 0; i < len; i++) {
    // Recorre el array
    let min = i; // min va ser igual a la posicion recorrida del array [i][i][i][i]
    for (let j = i + 1; j < len; j++) {
      //          2  6  5  8
      if (list[min] > list[j]) {
        //            2  6  5  8
        min = j; //         [j][j][j][j]
      }
    }
    if (min !== i) {
      // a new minimum is found. Swap that with the current element
      [list[i], list[min]] = [list[min], list[i]];
    }
  }
  return list;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
