"use strict";
// // Singleton implemtation
// class Singleton {
//     private static instance: Singleton;
//     private constructor() { }
var _a;
class CustomSet {
    constructor() {
        this._state = {};
        this.size = Object.keys(this._state).length;
        this[_a] = () => {
            let done = false;
            let index = 0;
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
                    };
                }
            };
        };
    }
    add(item) {
        this._state[JSON.stringify(item)] = item;
    }
    has(item) {
        let key = Object.keys(this._state);
        for (let i = 0; i < key.length; i++) {
            if (item == key[i]) {
                return true;
            }
        }
        return false;
    }
    clear() {
        this._state = {};
        return undefined;
    }
    keys() {
        let keys = (Object.keys(this._state));
        return keys;
    }
    values() {
        let values = (Object.values(this._state));
        return values;
    }
    delete(item) {
        for (let i in this._state) {
            if (i == item) {
                return delete this._state[i];
            }
        }
        return false;
    }
}
_a = Symbol.iterator;
const s = new CustomSet();
s.add(3);
s.add(4);
s.add(5);
console.log(s.has(3));
console.log(s.keys());
console.log(s.values());
// console.log(s.has(3))
// console.log(s.delete(5))
console.log(s.keys());
console.log(s.clear());
// for (let item of s) {
//     console.log(item);
// }
