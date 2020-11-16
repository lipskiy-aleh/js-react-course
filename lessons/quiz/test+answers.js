//######
// Напишите код, который поможет определить является ли объект массивом

const { array } = require("prop-types")

Array.isArray()

//######
// Перечислите все значения, которые приводятся к false

null, undefined, 0, ''
number, 'asd', {}, []
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy


//######
// Что произойдет в данном случае
var sum = function(a,b){return a+b}
sum.result = 4;

// sum()
// sum.result

//######
// Что произойдет в данном случае
"с" > true

//######
// Что произойдет в данном случае
var x = null || 0 || { name: "false" };

//######
// Что произойдет в данном случае
var scope = "global "; 
function outer() {
	function scope() {
        console.log(scope); 
	}
	scope();
}
outer();

//######
// Что такое Hoisting?
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

//######
// Что делает функция Function.prototype.bind.
// Напишите полифил.

// Function.prototype.bind(context)
function bind(fn, context) {
    return function() {
        return fn.call(context, arguments)
    }
}
function text() {
    console.log(this.a)
}
var context = {a: 100}
var newText = bind(text, context)
newText()

//######
console.log("130" + 3 - "0"); // 1303 -> number
console.log("two" / 2); // NaN

//######
var x; // undefined
var y = null;
console.log(x == y); // true  -> undefined == false  ==  null == false
console.log(x === y); // false 
console.log(x === undefined); // true

//######
var obj = {};
console.log(obj.toString()); // [object object]

//######
var bool = "false";
console.log(bool == false); // false
console.log(Boolean(bool)); // true

//######
var result = "ten" * 2; // NaN
console.log(result == NaN); // false // NaN !== NaN

//######
// Как проверить что число NaN
// typeof NaN === 'number'

// Number.isNaN()

// function isNaN(num) {
//   return num !== num
// }

//######
var array1 = new Array(3);
console.log(array1[0]);

array1.fill(10)

//######
let x = 50;

if (x < 100) {
   let x = 200;
   console.log(x); 
}
console.log(x);

//######
var arr1 = ["3"];
var arr2 = ["3"];
console.log(arr1 == arr2); // false

//######
function x(o){
    o.a = o.a + 5;
    o = {
        a: 20
    };
}

var obj = {a: 1};
x(obj);
console.log(obj.a) // 6

//######
var obj = {x: 12};
Object.prototype.z = 12;
console.log(typeof obj.z == undefined); //number

//######
var globalVar = "global";
function test1() {
    
    console.log(globalVar); //undefined
    return;

    var globalVar;
}
test1();

//######
var i = 5;
(function () {
    var j = 2;
})();
console.log(i + j);

//######
var sum = function(x, y){
    console.log(arguments.length); // 3
    return x + y;
}

console.log(sum(3, 5, 8)); // 8

//######
var test2 = {
    "name": "max",
    "getName": function(){
        return this.name;
    }
};

var getName = test2.getName.bind(test2);
console.log(getName() == "max") // true

var getName = test2.getName;
console.log(getName() == "max") // false

//###
var test3 = function(){
    var i = 0;
    for(var i = 0; i < 10; i++){
        var j = i;
    }
    console.log(i + j); // 19
};
test3(); 

//###
var answer = 42;

var logAnswer = function() {
    console.log(answer);
};

var sum = function(x, y){
    var answer = x + y;
    logAnswer();    //42
    return answer;
}

console.log(sum(2,4));  

//###
function Car(color){
    var that = {};
    that.color = color;
    return that;
};
// function Car(color){
//     this.color = color;
// };

var lada = new Car("red");
console.log(lada instanceof Car); // false

// lada instanceof Car -> lada.prototype.contsructor === Car

//###
function Car(color){
    this.color = color;
};

var lada = new Car("black");

Car.prototype.currentGear = 5;
console.log(++lada.currentGear); //6
console.log(lada.currentGear) //6
console.log(Car.prototype.currentGear); //5

//###
function Person(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => this.firstName + " " + this.lastName;
}

let batman = new Person("Bruce", "Wayne");
console.log(batman.getName()); // Bruce Wayne
console.log(batman.getName.call({firstName:"Clark", lastName:"Kent"})); // Bruce Wayne

//###
var o = {
        x: 8,

        valueOf: function(){
            return this.x + 2;
        },

        toString: function(){
            return this.x.toString();
        }
    };

console.log(o < "9"); // false  -> o.valueOf() < Number("9")

//###
// ***
console.log( 10['toString']['length'] ); // 1
