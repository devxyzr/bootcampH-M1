const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
  // Tu código aca:

  //   var suma = 0;

  //   for (let i = 0; i < array.length; i++) {
  //     if (Array.isArray(array[i])) {
  //       suma += countArray(array[i]) - 1;
  //     } else {
  //       suma += array[i];
  //     }
  //   }
  //   return suma;

  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    // Itero sobre los elementos
    if (Array.isArray(array[i])) {
      // Si el elemento que estoy iterando es un array (utilizando el metodo Array.isArray())
      // Si es un array
      suma = suma + countArray(array[i]); // Con recursion una sola vez, el valor queda sumado pero no se esta guardando en ninguna variable
    } else {
      // Si no es un array
      suma = suma + array[i];
    }
  }

  return suma;
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  // Recorrer el objeto -> Para recorrer el objeto se debe utilizar la propiedad For IN

  let propCount = 0; // Guarda la iteraciones que tiene el objeto
  for (const property in obj) {
    propCount++; // Cuenta cada vez que pasa por uno de los objetos
    if (typeof obj[property] === "object" && !Array.isArray(obj[property])) {
      // Esta haciendo referencia al tipo del valor [key:VALUE] -> que se esta iterando || es decir ====> obj.a / obj["a"] // Sabiendo el tipo de dato podemos decirle que aplique la recuersion o no.
      // Si pasa la validacion quiere decir que el valor de la propiedad del ciclo actual ES un objeto.
      // Entra a la recursion
      propCount = propCount + countProps(obj[property]); // Debe almacenarse dentro de una variable para poder hacer el return
    }
  }
  return propCount;
};

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  // Se puede utilizar metodos que esta definidos dentro del checkpoint

  // Como se recorre un linkend list
  // Se debe definir el comienzo de donde se debe empezar a recorrer
  // Castear = Cambiar el valor a otro tipo de valor
  let changes = 0; // Guardo un contador que contenga los numeros de cambios que existen dentro de la lista
  let current = this.head; // Arranca desde el head de la lista
  while (current) {
    // Va iterar simpre y cuando exista un nodo
    if (isNaN(Number(current.value))) {
      // Si el valor que quiero castear (currrent.VALUE) return true
      current.value = "Kiricocho"; // Cambio el valor a kiricocho
      changes++; // Cada vez que exista un cambio aumento en 1
    }
    current = current.next; // Cuando termino el ciclo debo avanzar al siguiente ciclo
  }
  return changes;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:

  let mergeQueue = new Queue(); // Se debe generar un nueva queue en donde se deben guardar lo elementos mergueados
  while (queueOne.size() || queueTwo.size()) {
    // Lo que porpone el while es que si existen elemtos dentro de las queue se ejecute con la finalidad de que agrege nuevos elementos dentro de queue

    let elementOne = queueOne.dequeue(); // El metodo dequeue saca el primer elemento del arreglo definido como queueOne
    let elementTwo = queueTwo.dequeue(); // El metodo dequeue saca el primer elemento del arreglo definido como queueTwo

    if (elementOne) mergeQueue.enqueue(elementOne); // Agrega el primer elemeto sacado de queueOne
    if (elementTwo) mergeQueue.enqueue(elementTwo); // Agrega el segundo elemeto sacado de queueOne
  }

  return mergeQueue;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:
  return function (num) {
    return num * multiplier;
  };
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:

  // Guardo un contador que contenga los numeros de cambios que existen dentro de la lista

  let valor = 0;
  let current = this.head; // Arranca desde el head de la lista
  while (current) {
    // Va iterar simpre y cuando exista un nodo
    if (current.value !== null) {
      valor = valor + current.value;
    }
    current = current.next; // Cuando termino el ciclo debo avanzar al siguiente ciclo
  }
  return valor
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
