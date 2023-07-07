document.write("<h1>Laboratorio 1</h1>")

//desafio 1
const obtenerNumerosParesElevados = (arr) => {
  return arr
    .filter(numero => numero % 2 === 0)
    .map(numero => numero ** 2)
    .filter(numero => numero > 10);
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosParesElevadosMayoresQueDiez = obtenerNumerosParesElevados(numeros);
console.log(numerosParesElevadosMayoresQueDiez);


//Desafi0 2

const personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 27 },
  { nombre: "María", edad: 22 },
];

obtenerPersonaMasJoven = (personas) => {
  let minE = personas[0].edad;
  let name = personas[0].nombre;

  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad < minE) {
      minE = personas[i].edad;
      name = personas[i].nombre;
    }
  }
  return `nombre:${name}, edad:${minE}`;
};

const result=obtenerPersonaMasJoven(personas)
console.log(result)

//desafio 3

let obtenerFrecuenciaLetras=(texto)=> {
  texto = texto.replace(/\s/g, " ");
  final = {};
  for (let char in texto) {
    if (texto[char] in final) {
      final[texto[char]] = final[texto[char]] + 1;
    } else {
      final[texto[char]] = 1;
    }
  }
  tmp = ``;
  Object.keys(final).forEach(function (letra) {
    tmp += `${letra} es: ${final[letra]} \n`;
  });
  return tmp;
}
const texto = "Hola, mundo!";
const resultado = obtenerFrecuenciaLetras(texto);
console.log(resultado);
