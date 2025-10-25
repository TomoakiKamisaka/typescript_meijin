"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number = 6;
const array = [1, 2, 3, 4, 5];
function add(number, array) {
    console.log(array);
    array.push(number);
    console.log(array);
}
add(number, array);
function substract(A, B) {
    const result = A - B;
    return result;
}
console.log(substract(10, 2));
function multply(A, B) {
    const result = A * B;
    return result;
}
console.log(multply(10, 2));
function divied(A, B) {
    const result = A / B;
    return result;
}
console.log(divied(10, 2));
