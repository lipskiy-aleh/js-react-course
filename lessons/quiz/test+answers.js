//######
// Напишите код, который поможет определить является ли объект массивом

Array.isArray()
[] instanceof Array -> true/false

//######
// Перечислите все значения, которые приводятся к false
0, null, undefined, NaN, ''
true -> 1/any Number, [], "asdas", {}

//######
// Что произойдет в данном случае
var sum = function(a,b){return a+b}
sum.result = 4;

sum.result -> 4

//######
// Что произойдет в данном случае
"с" > true
false

//######
// Что произойдет в данном случае
var x = null || 0 || { name: "false" };
x = { name: "false" }

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


//######
// Что делает функция Function.prototype.bind
const a = function() {
    this.b
}
let aCopy = a.bind({ b: 10 })
aCopy() -> 10
aCopy = aCopy.bind({ b: 100 })
aCopy() -> 10
// Напишите полифил.

function bind(func, context) {
    return function(...args) {
        return func.apply(context, args)
    }
}
let aCopy = bind(a, { b: 10 })


//######
console.log("130" + 3 - "0");   -> 1303
console.log("two" / 2);         -> NaN

//######
var x;
var y = null;
console.log(x == y); // -> true
console.log(x === y); // -> false
console.log(x === undefined); // -> true 

//######
var obj = {};
console.log(obj.toString()); -> '[object Object]'
var obj2 = { a: 100, b: 1000 }
JSON.stringify(obj2)
JSON.parse(obj2)

//######
var bool = "false";
console.log(bool == false); -> false
console.log(Boolean(bool)); -> true

//######
var result = "ten" * 2;
console.log(result == NaN); -> false  // NaN !== NaN 

//######
// Как проверить что число NaN 
isNaN()
function isNaN(num) {
    return num !== num
}

//######
var array1 = new Array(3);
console.log(array1[0]); -> undefined

array1.fill('abc')

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
arr2.push('5')
console.log(arr1 == arr2); -> false

//######
function x(o){
    o.a = o.a + 5;
    o = {
        a: 20
    };
}

var obj = {a: 1};
x(obj);
console.log(obj.a) -> 6

//######
var obj = {x: 12};
Object.prototype.z = 12;
console.log(typeof obj.z == undefined);

// obj.__proto__ === Object.prototype

[].map()/reduce()/filter()/toString()

//######
var globalVar = "global";
function test1() {
    console.log(globalVar); -> undefined
    return;

    var globalVar;
}
test1();

//######
var i = 5;
(function () {
    var j = 2;
})();
console.log(i + j); ->

//######
var sum = function(x, y){
    console.log(arguments.length); // 3
    console.log(arguments) -> [3,5,8]
    return x + y;
}

console.log(sum(3, 5, 8));

//######
var test2 = {
    "name": "max",
    "getName": function(){
        return this.name;
    }
};

var getName = test2.getName.bind(test2);
console.log(getName() == "max") // false

//###
var test3 = function(){
    var i = 0;
    for(var i = 0; i < 10; i++){
        var j = i;
    }
    console.log(i + j);
};
test3();

//###
var answer = 42;

var logAnswer = function() {
    console.log(answer); // 42
};

var sum = function(x, y){
    var answer = x + y;
    logAnswer();
    return answer;
}

console.log(sum(2,4)); // 6

//###
function Car(color){
    var that = {};
    that.color = color;
    return that;
};

var lada = new Car("red");
console.log(lada instanceof Car); // false
// lada.__proto__  Car.prototype

//###
function Car(color){
    this.color = color;
};

var lada = new Car("black");

Car.prototype.currentGear = 5;
console.log(++lada.currentGear); -> 6
lada.currentGear -> 6
console.log(Car.prototype.currentGear); -> 5

//###
function Person(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => this.firstName + " " + this.lastName;
    this.getName = function() { return  this.firstName + " " + this.lastName };
}

let batman = new Person("Bruce", "Wayne");
console.log(batman.getName()); // Bruce Wayne
console.log(batman.getName.call({firstName:"Clark", lastName:"Kent"})); // Bruce Wayne

// (...args) => {}
// function() {}
arguments


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

console.log(o < "9"); // false

//###
// ***
console.log( 10['toString']['length'] ); // 1


function* test() {
    yield 
}