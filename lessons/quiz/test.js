//######
// Напишите код, который поможет определить является ли объект массивом

//######
// Напишите код, который поможет определить является ли объект пустым

//######
// Перечислите все значения, которые приводятся к false

//######
// Что произойдет в данном случае
var sum = function(a,b){return a+b}
sum.result = 4;

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


//######
// Что делает функция Function.prototype.bind.
// Напишите полифил.


//######
console.log("130" + 3 - "0");
console.log("two" / 2);

//######
var x;
var y = null;
console.log(x == y);
console.log(x === y);
console.log(x === undefined);

//######
var obj = {};
console.log(obj.toString());

//######
var bool = "false";
console.log(bool == false);
console.log(Boolean(bool));

//######
var result = "ten" * 2;
console.log(result == NaN);

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
console.log(arr1 == arr2);

//######
function x(o){
    o.a = o.a + 5;
    o = {
        a: 20
    };
}

var obj = {a: 1};
x(obj);
console.log(obj.a)

//######
var obj = {x: 12};
Object.prototype.z = 12;
console.log(typeof obj.z == undefined);

//######
var globalVar = "global";
function test1() {
    console.log(globalVar);
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
    console.log(arguments.length);
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

var getName = test2.getName;
console.log(getName() == "max")

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
    console.log(answer);
};

var sum = function(x, y){
    var answer = x + y;
    logAnswer();
    return answer;
}

console.log(sum(2,4));

//###
function Car(color){
    var that = {};
    that.color = color;
    return that;
};

var lada = new Car("red");
console.log(lada instanceof Car);

//###
function Car(color){
    this.color = color;
};

var lada = new Car("black");

Car.prototype.currentGear = 5;
console.log(++lada.currentGear);
console.log(Car.prototype.currentGear);

//###
function Person(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => this.firstName + " " + this.lastName;
}

let batman = new Person("Bruce", "Wayne");
console.log(batman.getName());
console.log(batman.getName.call({firstName:"Clark", lastName:"Kent"}));

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

console.log(o < "9");

//###
// ***
console.log( 10['toString']['length'] );
