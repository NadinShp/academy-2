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
    const arrFromDegree = degree.toString().split('');
    let endOfdegree;
    switch(n.toString().length){
        case 1:
            endOfDegree = arrFromDegree.slice(-1).join('')
            break;
        case 2:
            endOfdegree = arrFromDegree.slice(-2).join('')
            break;
        case 3:
            endOfdegree = arrFromDegree.slice(-3).join('')
            break;
        case 4:
            endOfdegree = arrFromDegree.slice(-4).join('')
            break;
        default:
            endOfdegree = null;
    }
    return +endOfdegree === n ? 'Automorphic' : 'Not!!';
}
console.log(isAutomorphic(25)) //Automorphic
console.log(isAutomorphic(12)) //Not!!

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
