"use strict";

function BinarioADecimal(num) {
  // tu codigo aca

  // let respuesta = 0;
  // let numero = num.toString().split("").reverse();

  // for (let i = 0; i < numero.length; i++) {
  //   respuesta += numero[i] * 2 ** i;
  // }
  // return respuesta;

  //-----------------------------------------

  console.log(typeof num, num);
  // num STRING
  // digito * base(2) ** posiscion
  // digito   "1 1 0" base= 2
  // posicion "2 1 0"
  //

  let resultado = 0;
  let posicion = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    // Como recorro un for al reves
    console.log(num[i]);
    resultado = resultado + num[i] * 2 ** posicion;
    posicion++;
    console.log(typeof resultado, resultado);
  }
  return resultado;

  // ----------------------------------------

  reduce;
}

function DecimalABinario(num) {
  // tu codigo aca
  // return num.toString(2);
  // let binario = "";
  // while (num > 1) {
  //   let residuo = num % 2;
  //   binario = `${residuo}${binario}`;
  //   num = (num - residuo) / 2;
  // }
  // binario = `${num}${binario}`;
  // return binario;
  // -----------------------------------------

  console.log(typeof num, num);

  let resto = "";

  while (num !== 0) {
    resto = (num % 2) + resto;
    num = Math.floor(num / 2); // Nos interesa el entero inferior
    console.log(num);
  }

  return resto;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

console.log(DecimalABinario(11));

// -------------------------------------------------

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
