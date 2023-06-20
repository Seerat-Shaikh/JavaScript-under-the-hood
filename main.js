// ===== Thread & Call Stack =====
/*function first() {
    console.log('first...');
    second();
}
function second() {
    console.log('second...');
    third();
}
function third() {
    console.log('third...');
}

first();*/

// ===== Execution Context =====
/*var x = 100;
var y = 50;

function getSum(n1, n2){
    var sum = n1 + n2;
    return sum;
}

var sum1 = getSum(x, y);
var sum2 = getSum(100,50);*/


// ===== Memory Storage =====

// -----Primitive types: Stored on the stack----
let name = 'John';
let age = 30;

//----- Reference types: Stored on the heap---
let person = {
    name : 'Brad',
    age : 40,
};

let newName = name;
newName = 'Mario';

let newPerson = person;
newPerson.name = 'Sara';

console.log(person.name);