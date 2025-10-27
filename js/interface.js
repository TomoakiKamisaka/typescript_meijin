"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class worker {
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
        console.log("わたしは上坂 友了です");
    }
}
const Tomoaki = new worker("Tomoaki", 28, true);
console.log(Tomoaki.name);
console.log(Tomoaki.speak());
