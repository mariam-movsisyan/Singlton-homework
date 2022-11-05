// Singleton implemtation
class Singleton {
    private static instance: Singleton;
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}


//===============================================//

interface ICustomSetState<T> {
    [key: string]: T;
}

class CustomSet<T> {
     _state: ICustomSetState<T> = {};
    constructor() { }
    add(item: T): void {
        this._state[JSON.stringify(item)] = item;
    }
    has(item: T): boolean{
        let key = Object.keys(this._state)
        for(let i = 0; i < key.length; i++){
            if(item == key[i]){
                return true
            }
        }   
        return false
    }
    clear(): undefined{
        this._state = { }
        return undefined
    }
    keys(){
        let  keys = (Object.keys(this._state))
        return keys
    }
    values(){
        let values = (Object.values(this._state))
        return values
    }
    public size: number = Object.keys(this._state).length;
    
    delete(item: T){
        for(let i in this._state){
            if(i == item){
                return delete this._state[i]; 
            }
        }
        return false
    }
    [Symbol.iterator] = () => {
        let done = false;
        let index: number = 0;
        const keys = Object.keys(this._state);
        return {
            next: () => {
                const key = keys[index];
                if (index === keys.length) {
                    done = true;
                }
                index++;
                return {
                    value: this._state[key],
                    done
                }
            }
        }
    }

}
const s = new CustomSet<number>()
s.add(3)
s.add(4)
s.add(5)
console.log(s.has(3))
console.log(s.keys())
console.log(s.values())
console.log(s.delete(5))
console.log(s.clear())




 
