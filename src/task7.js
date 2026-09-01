const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
];

// Type your code below this line!
// ¿Pueden agregar un solo número a una fila existente?
arr[0].push(100)
console.log("¿Pueden agregar un solo número a una fila existente? ");
console.log(arr);

// ¿Pueden agregar una fila completa de números?
let newNumber =[30,31,32,33,34,35,36,37,38,39]
arr[3]=newNumber
console.log("¿Pueden agregar una fila completa de números? ");
console.log(arr);

// ¿Pueden eliminar un solo número de una fila específica?
//Eliminare el numero 15 de la segunda fila
arr[1].splice(5,1)
console.log("¿Pueden eliminar un solo número de una fila específica? ");
console.log(arr);

// ¿Pueden invertir una de las filas sin afectar a las demás?
arr[1]= arr[1].reverse()
console.log("¿Pueden invertir una de las filas sin afectar a las demás? ");
console.log(arr)

// Type your code above this line!
