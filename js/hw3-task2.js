class SortedNumber {
    constructor(){
        this._list = [];
    }
    add(x) {
        this._list = [...this._list, x].sort((a, b)=>a-b);
    }
    get(i) {
        return `Number-${this._list[i]}, length-${this._list.length}`;
    }
}
const number = new SortedNumber();
number.add(4);
number.add(12);
number.add(71);
console.log(number.get(2));
number.add(8);
number.add(5);
number.add(11);
console.log(number.get(3));