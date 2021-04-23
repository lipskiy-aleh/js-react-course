//######
// Напишите код, который поможет определить является ли объект массивом
const arr = {}
Array.isArray(arr)

typeof [] -> 'object'
[1, 2, 3].toString() -> [1, 2, 3].join(',')

//######
// Напишите код, который поможет определить является ли объект пустым
Object.keys() / Object.values()

// wrong
const someVar = {}
if (someVar) {
  console.log('Object not empty')
}

//######
// Перечислите все значения, которые приводятся к false
null
undefined
''
NaN
0 / -0
false

// 'false' == true 
Boolean('false') -> true

//######
// Что произойдет в данном случае
var sum = function (a, b) { return a + b }
sum.result = 4;

function IntBuilder() {
}
IntBuilder.prototype = {}
IntBuilder.someFunc = () => { }

//######
// Что произойдет в данном случае
"с" > true

//######
// Что произойдет в данном случае
var x = null || 0 || { name: "false" };
// x = { name: "false" }

//######
// Что произойдет в данном случае
var scope = "global ";
function outer() {
  function scope() {
    console.log(scope.toString());
  }
  scope();
}
outer();

//######
// Что такое Hoisting?

// let// const // var
// function() {}
// var a = function() {}

//######
// Что делает функция Function.prototype.bind.
// Напишите полифил.

const obj = {
  data: 123
}
function a() {
  console.log(this.data)
}
let aWithObj = a.bind(obj)
aWithObj() -> 123
aWithObj = aWithObj.bind({ data: 1000 })
aWithObj() -> 123
aWithObj = aWithObj.bind({ data: 'test' })

function customBind(func, that) {
  return function (...args) {
    return func.call(that, ...args)
  }
}

aWithObj = function () {
  return (function () {
    return (function () {
      return a.call(obj)
    }).call({ data: 1000 })
  }).call({ data: 'test' })
}

//######
console.log("130" + 3 - '0'); // 1303 - number
console.log("two" / 2); // NaN

//######
var x;
var y = null;
console.log(x == y); // true
console.log(x === y); // false
console.log(x === undefined); // true

//######
var obj = {};
console.log(obj.toString()); 

//######
var bool = "false";
console.log(bool == false);  false
console.log(Boolean(bool)); true

//######
var result = "ten" * 2;  NaN
console.log(result == NaN); false
console.log(result === NaN); false

isNaN(result) // true/false
function isNaNCustom(a) {
  return a !== a
}

//######
// Как проверить что число NaN

//######
var array1 = new Array(3);
console.log(array1[0]);

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
var obj = { a: 1 };

function x(o) {
  o.a = o.a + 5;
  if(o === obj) {
    console.log('')
  }
  o = {
    a: 20
  };
  if(o === obj) {
    // never
    console.log('')
  }
}

x(obj);
console.log(obj.a) // 6

//######
var obj = { x: 12 };
Object.prototype.z = 12;
console.log(typeof obj.z ('number') == undefined); //false

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
console.log(i + j); // Error j is not defined

//######
var sum = function (x, y) {
  console.log(arguments.length);  // 3
  return x + y;
}

console.log(sum(3, 5, 8));

//######
var test2 = {
  "name": "max",
  "getName": function () {
    return this.name;
  }
};

var getName = test2.getName.bind(tes2);
console.log(getName.call(test2) == "max") 

//###
var test3 = function () {
  var i = 0;
  for (var i = 0; i < 10; i++) {
    var j = i;
  }
  console.log(i + j); 
};
test3();

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

console.log(sum(2, 4)); // 6

//###
function Car(color) {
  var that = {};
  that.color = color;
  return that;
};

Car.prototype = {}

var lada = new Car("red");
console.log(lada instanceof Car); //false

//###
function Car(color) {
  this.color = color;
};

var lada = new Car("black");

Car.prototype.currentGear = {};
// lada.currentGear === Car.prototype.currentGear (true)
console.log(++lada.currentGear); //6
console.log(Car.prototype.currentGear); //5

//###
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = () => this.firstName + " " + this.lastName;
}

let batman = new Person("Bruce", "Wayne");
console.log(batman.getName()); // 
console.log(batman.getName.call({ firstName: "Clark", lastName: "Kent" })); //

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

console.log(o < "9"); // false

//###
const obj = {
  "key 1": 100
}
obj["key 1"]
// ***
console.log(10['toString']['length']); 1
10 - new Number(10)
10['toString']
(function(a,b) {}).length - 2