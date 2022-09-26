"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// Instancia =  linkedList = new LinkedList();
LinkedList.prototype.add = function (value) {
  let newNode = new Node(value),
    current = this.head;

  if (current === null) {
    this.head = newNode;
    this._length++;
    return newNode;
  }

  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
  this._length++;
  return newNode;
};

// LinkedList.prototype.remove = function () {
//   let current = this.head,
//     count = this._length;

//   if (count === 0) {
//     return count;
//   }
//   else if (current.next.next === null) {
//     current.next = null;
//   }

//   return current.next.value;
// };

LinkedList.prototype.remove = function () {
  let current = this.head;

  //si está vacia
  if (current === null) {
    return null;
  }
  // = null   // = null
  if (current && !current.next) {
    let guardarUltimo = current.value;
    this.head = null;
    this._length--;
    return guardarUltimo;
  }

  while (current.next.next) {
    current = current.next;
  }

  let guardarValor = current.next.value;
  current.next = null;
  this._length--;
  return guardarValor;
};

LinkedList.prototype.search = function (value) {
  if (this.head === null) return null;
  let current = this.head;

  while (current) {
    if (current.value === value) return current.value;
    else if (typeof value === "function") {
      if (value(current.value)) {
        return current.value;
      }
    }

    current = current.next;
  }
  return null;
};

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) {
  let aux = 0;

  for (let i = 0; i < key.length; i++) {
    aux = aux + key.charCodeAt(i);
  }
  return aux % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") {
    throw new TypeError("Key are must strings");
  }

  let index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = {};
  }

  this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  return this.buckets[index][key];
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key);
};

// HashTable.prototype.hash = function (key) {
//   let sum = 0;
//   for (let i = 0; i < key.length; i++) {
//     sum += key.charCodeAt(i);
//   }
//   return sum % this.numBuckets;
// };

// HashTable.prototype.set = function (key) {
//   if (typeof key !== "string") throw TypeError("Keys must be strings");
//   let i = this.hash(key);

//   if (this.buckets[i] === undefined) {
//     this.buckets[i] = {};
//   }

//   this.buckets[i][key] = value;
// };

// HashTable.prototype.get = function (key) {
//   let i = this.hash(key);
//   return this.buckets[i][key];
// };

// HashTable.prototype.hasKey = function (key) {
//   let i = this.hash(key);
//   return this.buckets[i].hasOwnProperty(key);
// };

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
