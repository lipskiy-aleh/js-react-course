
/*******************/

function f(...arg){
  var sum=0;
   sum+=arg.reduce((s,item)=>s+=item);
  function summator(...arg){
    sum+=arg.reduce((s,item)=>s+=item);
    return summator;
  }
  summator.toString=function(){
    return sum;
  }
  return summator;
}

console.log(f(1)) //1
console.log(f(1,2)) //3 
console.log(f(1)(2)) //3


/*******************/


function one(arg){
	if (typeof arg === 'function') {
		return arg(1);
	} else {
		return 1;
	}
}

function seven(arg) {
	if (typeof arg === 'function') {
		return arg(7);
	} else {
		return 7;
	}
}

function plus(arg) {
	return function (a) {
		return a + arg;
	}
}
function minus(arg) {
	return function (a) {
		return a - arg;
	}
}

console.log(seven(plus(one()))) //8

/****************************/

Сортировка пузырьком
Скорость: арифметическая прогрессия
  n*(n+1)/2 если for(let j=0;j<arr.length-i;j++)
  (n-1)*n/2 если for(let j=0;j<arr.length-i-1;j++)

function sort(arr){
  var max;
  for(let i=0;i<arr.length;i++){
    
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
          max=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=max;
        }
   }
  }
   return arr;
}
var arr=[2,5,4,7,0,1];
console.log(sort(arr));

/****************************/

код, который сделает из массива объект

var arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
]
let obj={};
for(let key of arr){
  obj[key.name]=key.value
}
//obj={width: 10, height: 20}

/****************************/

Сумма первых n элементов

var arr=[1, 2, 3, 5, 7, 9, 10, 4, 6, 2, 3, 1, 10, 12, 5, 7];
var n=10;
var sss=arr.reduce((s,item,i)=>(i<n)?s+=item:s);

/****************************/

Сумма всех элементов
var arr=[1, 2, 3, 5, 7, 9, 10, 4, 6, 2, 3, 1, 10, 12, 5, 7];
var sss=eval(arr.join('+'));

/****************************/

Напишите все известные вам способы, чтобы вывести в консоли значение x из объекта используя функцию

function f() { console.log(this.x); }
var obj = {x: 'bar'};

f.call(obj);
f.apply(obj);
(f.bind(obj))();
obj.funk = function f() { console.log(this.x); }
obj.funk();

/****************************/

Проверить закрыты ли все скобки

const pairs=[
  ['(',')'],
  ['{','}'],
  ['[',']']
]

function getPair(s){
  for(let key of pairs){
    if(key[1]===s){
      return key[0];
    }
  }
  return null
}

function isClose(str){
  if(str.length%2!==0){
    return false;
  }
  
  if(getPair(str[0])){
    return false;
  }
  
  let counts={};
    
  for(let key in str){
    let s=str[key];
    let pair=getPair(s);
    if(pair){
      if(counts[pair]){
        counts[pair]--;
      } 
    }
    else{
      if(counts[s]){
        counts[s]++;
      }
      else{
        counts[s]=1;
      }
    }
  }
 
  for(let key in counts){
    if(counts[key]){
      return false;
    }
  }
  return true;
} 

var str='()';
console.log(isClose(str));//true

str='(({}))';
console.log(isClose(str));//true

str=')(';
console.log(isClose(str));//false

str='(])';
console.log(isClose(str));//false

str='())({}}{()][][';
console.log(isClose(str));//false

/****************************/
Проверить закрыты ли все скобки (с массивом)
const closeBraces={
  '}':'{',
  ']':'[',
  ')':'('
};

function validBraces(braces){
    let openBraces=[];
   
    if(braces.length%2!==0){return false;}
    if(closeBraces[braces[0]]){
      return false;
    }
    else{
      openBraces.push(braces[0]);
    }
    
    for(let i=1;i<braces.length;i++){
      let brace=braces[i];
      let openBrace=closeBraces[brace];
      if(openBrace){
        if(openBraces[openBraces.length-1]===openBrace){
          openBraces.pop();
        }
        else{
          return false;
        }
      }
      else{
        openBraces.push(brace);
      }
    }
    if(openBraces.length>0){
      return false;
    }
    return true;
}


let braces='(){}[]';
console.log(validBraces(braces))//true
braces="([{}])";
console.log(validBraces(braces))//true
braces="(}" ;
console.log(validBraces(braces))//false
braces="[(])";
console.log(validBraces(braces))//false
braces="[({})](]";
console.log(validBraces(braces))//false


/****************************/
Задача про палиндром

function isPal(str){
  str=str.toLowerCase();
  let n=str.length;
  let str1='';
  for(let i=0;i<n;i++){
    if(str[i]!==' '){
      str1+=str[i];
    }
  }
  n=str1.length;
  for(let i=0;i<n/2;i++){
    if(str1[i]!==str1[n-i-1]){
      return false;
    }
  }
  
  return true;
}

Через массив

function isPal(str){
  str=str.toLowerCase().split(' ').join('');
  return str===str.split('').reverse().join('');
}


var str='ааб бв в б ба а';
console.log(isPal(str));

str='Анна';
console.log(isPal(str));

str='А роза упала на лапу Азора';
console.log(isPal(str));


str='Анпнна';
console.log(isPal(str));

/****************************/

 Числа от 1 до 100 лежат в массиве, они хаотично перемешанные, от туда изъяли одно число, надо найти, что это за число. 
 алгоритм не должен превышать O(n^2) сложности.
 
 Сумма арифметической прогрессии n*(n+1)/2;
 
 var s1=n*(n+1)/2;
 
 var s2=arr.reduce((sum,item)=>sum+=item);
 
 var num=s1-s2;
  
/****************************/

Надо написать функцию, которая вернет «hello world», но при этом в теле функции нельзя использовать ни цифры, ни буквы, 
а циклы, массивы, объекты можно, но без цифр. 
 

function hello_world(){
  return arguments.callee.name.replace('_', ' ');
} 
 
  или
  
var one=[,].length,
    two=[,,].length, 
    three=[,,,].length,
    four=[,,,,].length,
    five=[,,,,,].length,
    six=[,,,,,,].length,
    seven=[,,,,,,,].length,
    eight=[,,,,,,,,].length,
    nine=[,,,,,,,,,].length,
    zero=[].length;
    
let s='';
let num=''+one+zero+four; //104 - h
let c=String.fromCharCode(+num);
s+=c;

num=''+one+zero+one; //101 - e
c=String.fromCharCode(+num);
s+=c;

num=''+one+zero+eight; //108 - l
c=String.fromCharCode(+num);
s+=c;

num=''+one+zero+eight;// 108 -l
c=String.fromCharCode(+num);
s+=c;

num=''+one+one+one;//111 - o
c=String.fromCharCode(+num);
s+=c;

num=''+three+two; //32 - space
c=String.fromCharCode(+num);
s+=c; 

num=''+one+one+nine;//119 - w
c=String.fromCharCode(+num);
s+=c;

num=''+one+one+one;//111 - o
c=String.fromCharCode(+num);
s+=c;

num=''+one+one+four;//114 - r
c=String.fromCharCode(+num);
s+=c;

num=''+one+zero+eight; //108 - l
c=String.fromCharCode(+num);
s+=c;

num=''+one+zero+zero; //100 - d
c=String.fromCharCode(+num);
s+=c;

console.log(s) 
   
/****************************/

Что будет выведено в консоль, как можно модифицировать пример что бы он возвращал правильный результат(назовите как можно больше способов)?

 for (var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}//10 раз 10

for (var i = 0; i < 10; i++) {
	(function(i){setTimeout(function () {
		console.log(i);
	}, 100);})(i)
} //0 - 9  IIF

for (var i = 0; i < 10; i++) {
	setTimeout(function (i) {
		console.log(i);
	}, 100, i);
} //0 - 9 передать i в setTimeout

for (let i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
} //0 - 9 использовать let

for (var i = 0; i < 10; i++) {
	setTimeout(function (i) {
		console.log(i);
	}.bind(null,i), 100);
} //0 - 9 использовать bind

   
/****************************/

 Объяснить в какой последовательности выведутся цифры и почему так.
 
console.log(1);
setTimeout(function() {
	console.log(2);
}, 0)
console.log(3);
 
 //132 
   
/****************************/

Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')

var arr=['кот','ток','окт'];

function isEq(arr){
  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].toLowerCase().split('').sort().join('');
  }
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]!==arr[i+1]){
      return false;
    }
  }  
  return true;
 
}

console.log(isEq(arr));
   
/****************************/

Есть массив в котором лежат объекты с датами, отсортировать по датам.

var arr=[{date: '10.01.2017'}, {date: '21.12.2002'}, {date: '05.11.2016'}];

arr.forEach((item)=>{
            let d=item['date'].split('.');
            let newDat=new Date(+d[2], +d[1]-1, +d[0]);
            item['date']=newDat;
            })
arr.sort((a,b)=>a.date-b.date);
console.log(arr);
   
/****************************/

Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'

function f(op,...args){
    return args.join(op);
}

f('*', '1', 'b', '1c') //"1*b*1c"
   
/****************************/

 Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
 Number.prototype.plus=function(n){return this+n};
 Number.prototype.minus=function(n){return this-n};
 console.log((2)) //2
 console.log((2).plus(1)) //3
 console.log((2).plus(3).minus(1)) //2
    
/****************************/

 TOP 5 результатов (хранить всех игороков, выводить 5 лучших без повторений)
 
let scores=[];

function addScore(obj){
  scores.push(obj);
}

function top(n){
  let result=[];
  let count=0;
  scores.sort((a,b)=>b.ball>a.ball);
  for(let i=0;i<scores.length;i++){
    if(result.filter((item)=>item.name===scores[i].name).length==0){
      result.push(scores[i]);
      count++;
    }
    if(count==n){
      return result;
    }
  }
  return result;
}

addScore({name:'masha', ball:10})
addScore({name:'pasha', ball:30})
addScore({name:'masha', ball:15})
addScore({name:'pasha', ball:40})
addScore({name:'sasha', ball:14})
addScore({name:'sasha', ball:21})
console.log(scores);
console.log(top(5));

 //хранить без повторений

let scores=[];

function addScore(obj){
  let temp=scores.filter((item)=>item.name===obj.name);
  if(temp.length==0){
      scores.push(obj);
  }
  else{
    let idx=scores.indexOf(temp[0]);
    if(scores[idx].ball<obj.ball){
      scores[idx].ball=obj.ball;
    }
  }
  
}

function top(n){
  scores.sort((a,b)=>b.ball>a.ball);
  return scores.slice(0,n);
 }
 
addScore({name:'masha', ball:10})
addScore({name:'pasha', ball:30})
addScore({name:'masha', ball:15})
addScore({name:'pasha', ball:40})
addScore({name:'sasha', ball:14})
addScore({name:'sasha', ball:21})
console.log(scores);
console.log(top(5));

 //****через объект**/
 
 let res=[];
 
 function add(obj){
  let{name, ball}=obj;
  if(res[name]){
    if(res[name]<ball){
      res[name]=ball
    }
  }
  else{
    res[name]=ball
  }
}

function top(n){
    let arr=Object.keys(res);
    arr.sort((a,b)=>res[b]-res[a])
    return arr.slice(0,n)
}


//**через Map**//
let m=new Map()

function add(obj){
    let{name, ball}=obj;
    if(m.has(name)){
         if(map.get(name)<ball){
            m.set(name,ball)
        }
    }
    else{
         m.set(name,ball)
    }
}

function topN(n){
    let arr=Array.from(m.entries())
    arr.sort((a,b)=>b[1]-a[1])
    return arr.slice(0,n)
}
 
 
 
 