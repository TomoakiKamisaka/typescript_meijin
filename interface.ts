
interface person{
    //プロパティ
        name: string;
        age: number;
        married: boolean;

    //メソッド
        speak():void;

}

class worker implements person{
    //プロパティ
        private _name: string = "";
        private _age: number = 0;
        private _married: boolean = true;
    //コンストラクター
        constructor(name :string, age: number, married: true){
            this.name = name;
            this.age = age;
            this.married = married;

        }   
    //setter,getter
        set name(value:string){
            this._name = value
        }
        get name():string{
            return this._name;
        }
        set age(value: number){
            this._age = value;
        }        
        get age():number{
            return this._age;
        }
        set married(value:boolean){
            this._married = value;
        }
    //メソッド
        speak():void{
            console.log("わたしは上坂 友了です")
        }
}

const Tomoaki:worker = new worker("Tomoaki",28,true);
console.log(Tomoaki.name);
console.log(Tomoaki.speak());

