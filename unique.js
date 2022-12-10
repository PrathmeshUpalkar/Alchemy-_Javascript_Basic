// Write a function that will take an array of numbers and return a new array that only contains unique numbers.


let arr =[1,2,4,87,4,1,2];

let newarr = [...new Set(arr)];

console.log(newarr)