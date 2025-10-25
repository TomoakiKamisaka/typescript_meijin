const person: readonly [string, number, boolean] = ["田中",25,true];
console.log('名前：', person[0]);
console.log('年齢：', person[1]);
console.log('既婚：', person[2]);

const point: [number,number] = [10 ,20];

const [name, age, married] = person;
console.log(name,age,married);

// ==================

const students: [string, number, string][] = [
    ["佐藤", 20,"文学部"],
    ["鈴木", 22, "理学部"],
    ["山田", 21, "工学部"]
]

students.push(["上坂", 21, "工学部"]);
console.log("🚀 ~ students:", students)

students.pop();
console.log("🚀 ~ students:", students)

students.unshift(["森田", 21, "工学部"]);
console.log("🚀 ~ students:", students)




