"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Worker {
    //プロパティ
    _name = "";
    _age = 0;
    _married = true;
    //コンストラクター
    constructor(name, age, married) {
        this.name = name;
        this.age = age;
        this.married = married;
    }
    //setter,getter
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    set age(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }
    set married(value) {
        this._married = value;
    }
    //メソッド
    speak() {
        console.log(`わたしは${this.name}です`);
    }
}
const Tomoaki = new Worker("Tomoaki", 28, true);
console.log(Tomoaki.name);
console.log(Tomoaki.speak());
