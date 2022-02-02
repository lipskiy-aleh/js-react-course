# Linked List

Implement **linked list (LL)** data structure. It should be done as a **stand-alone**, **clean**, **independent component**, which can be used wherever needed. LL should have the following methods (you can add your own methods, but the 5 listed below must be and named exactly as stated):
  
```js
const ll = new LinkedList();

/** 

  WARNING:
  Please use the suggested methods names!

**/

// returns head of the list;
ll.getHead();  

// stores specified value in list; method should be chainable;
ll.add(value); 

// find Node with specified value or by specific function; return node;
ll.find(value)
// or
ll.find((element) => { /* ... */ } )
// function should return true/false
// element - value of node which you look now

// add specified value in list after node; method should be chainable;
ll.addAfter(value, parentNode); 

// removes first node from list by provided value; method should be chainable;
ll.delete(value); 

// looking for stored data in list using value; method must return true/false
ll.isExist(value);
``` 
  
### Node should look like in example bellow  
```js
class Node {
  constructor(data) {
    this.data = data

    this.next = null
  }
}
```