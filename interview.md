```javascript
Promise.resolve(55)
.then(function (val) {
    console.log(val);
    throw new Error();
})
.then((val) => console.log('then', val))
.catch((val) => {
    console.log('catch', val);
    return  Promise.reject();
})
.then(finalHandler, finalHandler1)
.then(finalHandler, finalHandler1)
.then(finalHandler, finalHandler1);

function finalHandler() {
    console.log('finalHandler')
}
function finalHandler1() {
    console.log('finalHandler1')
}


console.log(1)
setTimeout(() => { console.log(2)}, 0)
Promise.resolve().then(() => console.log(3))
console.log(4)

------------------

var i = 10
var arr = []
while(i--) {
    arr.push(function() {console.log(i)})
}

arr[9]() -> 1

------------------
var i = 1
function func() {
    console.log(i)
}

function func2() {
    var i = 10
    func()
}

func2()
-------------------

var obj = {
    el: 100,
    func: function() {
        console.log(this.el)
    }
}

obj.func()  ->
var func = obj

--------------------


-------------------------
| 1 | 1 | 1 | 1 | 1 | 1 |
-------------------------
| 1 | 1 | 1 | 1 | 1 | 1 |
-------------------------
| 1 | 1 | 1 | 1 | 1 | 1 |
-------------------------
| 1 | 1 | 1 | 1 | 1 | 1 |
-------------------------
```