# Double Linked List

Implement data structure **double linked list**. It should be done as a **stand-alone**, **clean**, **independent component**, which can be used wherever needed. DLL should have the following methods (you can add your own methods, but the 5 listed below must be and named exactly as stated):

```js
const dll = new DoubleLinkedList();

/** 

  WARNING:
  Please use the suggested methods names!

**/

// returns head of the list;
dll.getHead();  

// returns tail of the list;
dll.getTail(); 

// return data of list in next format:
// if argument === true -> print from head to tail (forward direction)
// if argument === false -> print from tail to head (reverse direction)
// by default argument = true
// 1 -> 2 -> 3 -> [till the end]
dll.traverse(order);

// stores specified value in list; method should be chainable;
dll.add(value); 

// get Node with specified value; return node;
dll.find(value)

// add specified value in list after node; method should be chainable;
dll.addAfter(value, parentNode); 

// removes first node from list by provided value; method should be chainable;
dll.delete(value); 

// looking for stored data in list using value; method must return true/false
dll.isExist(value);
``` 

### Node should look like in example bellow
```js
class Node {
  constructor(data) {
    this.data = data

    this.previous = null
    this.next = null
  }
}
```

### Examples:
```js
const dll = new DoubleLinkedList();

dll.add('two').add('one').add('three').add('four');
dll.traverse() // two -> one -> three -> four
dll.traverse(true) // two -> one -> three -> four
dll.traverse(false) // four -> three -> one -> two

dll.head(); // Node with value === 'two'
dll.tail(); // Node with value === 'four'

const parentNode = dll.find('one')
dll.addAfter('ten', parentNode)
dll.traverse() // two -> one -> ten -> three -> four

dll.delete('one').delete('three');
dll.traverse() // two -> ten -> four

dll.isExist('ten') // true
dll.isExist('one') // false
``` 
