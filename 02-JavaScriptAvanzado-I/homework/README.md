# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Las variables que son declaradas, se limitan al contexto de ejecucion, cuando no lo son; pasan al contexto global.

```javascript
x = 1;
var a = 5;
var b = 10;

var c = function (a, b, c) {
  var x = 10;
  console.log({ x }); // 10
  console.log({ a }); // 8
  var f = function (a, b, c) {
    b = a;
    console.log({ b }); // 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log({ b }); // 9 -> Esta fuera de la funcion guarda la funcion primitiva, esta dentro de la funcion  C
};

c(8, 9, 10);

console.log({ b }); // 10 // Contexto
console.log({ x }); // 1
```

```javascript
console.log(bar); // Udefined -> Hosisting
console.log(baz); // Error de referencia ->
foo();

function foo() {
  console.log("Hola!"); // No ejecuta Foo -> El error corta la ejecucion
}

var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // "Franco" -> Con var
```

```javascript
var instructor = "Tony";

console.log(instructor); // Tony

(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // Franco -> Se ejecuta y se elimina. 
  }
})();

console.log(instructor); // Tony -> No entra dentro del contexto de la funcion autoejecutable. 
```

```javascript
var instructor = "Tony"; // Contexto global 
let pm = "Franco"; // Contexto de bloque 

if (true) { // Alcance de bloque de la funcion. 
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse the flash // Este let vive dentro del bloque, no fuera del bloque.
}

console.log(instructor); // The Flash
console.log(pm); // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $9
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinito
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2 Siempre vamos a recibir el segundo and 
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10]  // 23
3>2>1 // flase
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // Undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return console.log(snack);
}

getFood(false); // Undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname; // Juan Perez //Objeto Global

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1); //1
  setTimeout(function () {
    console.log(2); //4
  }, 1000);
  setTimeout(function () {
    console.log(3); //3
  }, 0);
  console.log(4); // 2
}

printing();
```
