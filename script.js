//Ejercicio 1
// let array = [];

// const countdown = (n) => {

//   if(n === 0) return;

//   array.push(n);

//   countdown(n - 1);

// };

// countdown(5);

// console.log(array);


//........................//

//Ejercicio 2
// const esPalindromo = (str) => {
//   const ultimo = str.length - 1;

//   if(str[0] != str[ultimo]) {
//     return false;
//   }

//   if(str.length < 2) {
//     return true;
//   }

//   const substr = str.substr(1, ultimo - 1);

//   if(esPalindromo(substr)) {
//     return true;
//   }

//   return false;

// }

// console.log(esPalindromo("oso"));
// console.log(esPalindromo("hola"));