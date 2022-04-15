//######
// Напишите код, который поможет определить является ли объект массивом
Array.isArray()

//######
// Напишите код, который поможет определить является ли объект пустым
Object.keys(obj).length

//######
// Перечислите все значения, которые приводятся к false
0,
    -0
false
null, undefined
NaN
''

//######
// Что произойдет в данном случае
var sum = function (a, b) { return a + b }
sum.result = 4;

function Constructor() {
}

Constructor.prototype = {}
Constructor.staticMethod = () => { }

//######
// Что произойдет в данном случае
"c" > true //false
"c" -> NaN -> false -> 0
true -> 1

//######
// Что произойдет в данном случае
var x = null || 0 || { name: "false" };
// x = { name: "false" }

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
// Что делает функция Function.prototype.bind.
// Напишите полифил.
const obj = {
    el: 1,
    func: function () {
        return this.el
    }
}
function polyfill(ctx, ...args) {
    const func = this
    return function (...arguments) {
        return func.call(ctx, ...args, ...arguments)
    }
}

//######
console.log("130" + 3 - "0"); // 1303
console.log("two" / 2);       // NaN

//######
var x;
var y = null;
console.log(x == y); // true
console.log(y == 0); // false
console.log(x === y); // false
console.log(x === undefined); // true

//######
var obj = {};
console.log(obj.toString()); // [object Object]

//######
var bool = "false";
console.log(bool == false); //false
console.log(Boolean(bool)); //true

//######
var result = "ten" * 2;
console.log(result == NaN); false

//######
// Как проверить что число NaN
Number.isNaN(a)
function isNaN(a) {
    return a !== a
}

//######
var array1 = new Array(3);
console.log(array1[0]); // undefined
// array1.fill(1)

//######
let x = 50;

if (x < 100) {
    let x = 200;
    console.log(x); // 200
}
console.log(x); // 50

//######
var arr1 = ["3"];
var arr2 = ["3"];
console.log(arr1 == arr2); // false

//######
function x(o) {
    o.a = o.a + 5;
    o = {
        a: 20
    };


    // o.a === 20
}

var obj = { a: 1 };
x(obj);
console.log(obj.a) // 6

//######
var obj = { x: 12 };
Object.prototype.z = 12;
console.log(typeof obj.z == undefined); //false //typeof obj.z === number

//######
var globalVar = "global";
function test1() {
    console.log(globalVar); // undefined
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

(function () {
})();

//######
var sum = function (x, y) {
    // const args = [...arguments]
    console.log(arguments.length); // 3
    return x + y;
}

console.log(sum(3, 5, 8)); // 8

//######
var test2 = {
    "name": "max",
    "getName": function () {
        return this.name;
    }
};

var getName = test2.getName;
console.log(getName() == "max") // false

// class Test {
//     name = 'max'
//     getName = () => {
//         return this.name
//     }
// }
// const test = new Test()
// const getName = test.getName
// getName()

//###
var test3 = function () {
    var i = 0;
    for (var i = 0; i < 10; i++) {
        var j = i;
    }
    console.log(i + j);
};
test3(); //19

//###
var answer = 42;

var logAnswer = function () {
    console.log(answer); // 42
};

var sum = function (x, y) {
    var answer = x + y;
    logAnswer();
    return answer;
}

console.log(sum(2, 4));  //6

//###
function Car(color) {
    var that = {};
    that.color = color;
    return that;
};

var lada = new Car("red");
console.log(lada instanceof Car); // false

// function Constructor() {
//     // const this = Object.create(Constructor.prototype)

//     var that = {};
//     that.color = color;
//     return that;

//     // return this
// }
// const a = new Constructor()

//###
function Car(color) {
    this.color = color;
};

var lada = new Car("black");

Car.prototype.currentGear = 5;
lada.__proto__ === Car.prototype // true
console.log(++lada.currentGear); // 6
lada.__proto__ === Car.prototype // true
console.log(Car.prototype.currentGear); // 5

//###
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => this.firstName + " " + this.lastName;
}

let batman = new Person("Bruce", "Wayne");
console.log(batman.getName()); //Bruce Wayne
console.log(batman.getName.call({ firstName: "Clark", lastName: "Kent" })); // Bruce Wayne

//###
var o = {
    x: 8,

    valueOf: function () {
        return this.x + 2;
    },

    toString: function () {
        return this.x.toString();
    }
};

console.log(o < "9"); // false // 10 < 9

//###
// ***
console.log(10['toString']['length']); //1

10
10['toString']
10['toString']['length'] // 1


const obj = {}

obj.a
obj[a]
obj['a']