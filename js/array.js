"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//好きな数字を配列で5個作る
const myArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let value of myArray) {
    sum += value;
    console.log('value:', value, typeof myArray);
    console.log('myarray[value]:', myArray[value]);
}
console.log(sum);
//====配列操作練習====
//1.配列への追加
const fruits = ['apple', 'banana'];
console.log('初期配列：', fruits);
fruits.push('orange');
console.log("🚀 ~ fruits:", fruits);
fruits.push("grape", "mango");
console.log("🚀 ~ fruits:", fruits);
fruits.unshift("strawberry");
console.log("🚀 ~ fruits:", fruits);
fruits.pop();
console.log("🚀 ~ fruits:", fruits);
fruits.shift();
console.log("🚀 ~ fruits:", fruits);
fruits.splice(1, 2);
console.log("🚀 ~ fruits:", fruits);
