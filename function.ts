
const number:number = 6;
const array:number[] = [1,2,3,4,5];


function add(number:number,array:number[]): void{
    console.log(array);
    array.push(number);
    console.log(array);
}

add(number,array);


function substract(A:number,B:number):number{
    const result = A - B;
    return result;
}
console.log(substract(10,2));

function multply(A:number,B:number):number{
    const result = A * B;
    return result;
}

console.log(multply(10,2));

function divied(A:number,B:number):number{
    const result = A / B;
    return result;
}

console.log(divied(10,2));
