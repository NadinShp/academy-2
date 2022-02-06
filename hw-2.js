//Task1
function fiveLine(s){
    const arr = [];
    for (let i=0; i<5; i++){
        arr.push(s.trim().repeat(i+1));
    }
    return arr.join('\n');
};
console.log(fiveLine("  xy "));
console.log(fiveLine("  a"));

//Task2
function getDiffrenceFromString(s){
    return s.split('').map(el=>el.charCodeAt()).join('')
    .split('').filter(el=>el==='7').length*6;
};
console.log(getDiffrenceFromString('ABC'))//6
console.log(getDiffrenceFromString('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY'))//96

//Task3
function getAlientLanguage(s){
    return s.split(' ').map(w=> w.split('')
    .map((l,index)=>index===w.length-1?l.toLowerCase() : l.toUpperCase()).join('')).join(' ');
};
console.log(getAlientLanguage('My name is John')) //My NAMe Is JOHn

// Task4
function isAutomorphic(n){
    const degree = n*n;
    return degree.toString().endsWith(n) ? 'Automorphic' : 'Not!!';
}
console.log(isAutomorphic(25)) //Automorphic
console.log(isAutomorphic(12)) //Not!!

//Task 5
Function.prototype.call = function(context, ...args) {
        return this.apply(context, args);
};

//Task 6
Function.prototype.bind = function (context) {
    const func = this;
    return function () {
        if (this && this.prop) {
            return func.apply(this);
        }
        return func.apply(context);
    };
};
//Task7
function greet(value){
    let name = value;
    const greet_abe = function() {
    return "Hello, " + name + '!';
    };
    return greet_abe;
};
console.log(greet('Abe')()); // Hello, Abe!
console.log(greet('Ben')()); // Hello, Ben!
