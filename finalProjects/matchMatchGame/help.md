# Helps

## How to generate matrix with set of random values
1) You should have a set of values for Card.  
Example:
```
  const valuesOfCard = ['A','B','C','D', 'E', 'F']
```
2) Based on difficulty of game create temporary array of values for game

| Difficulty 	| Elements in array 	|
|-	          |-	                  |
| easy 	      | 16(4x4)     	      |
| medium 	    | 36(6x6) 	          |
| hard 	      | 64(8x8) 	          |
  
  
After this step you should have:  
```
  //for easy game 
  const cardsData = ['A','A','B','B','C','C','D','D','E','E','F','F','A','A','B','B']
```
  
3) Than shuffle this array:
  * [Lodash shuffle](https://lodash.com/docs/4.17.15#shuffle)
  * Or use your custom implementation of shuffle algorithm. [Example](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

4) And the last step **set** values from `cardsData` array to your fields array of arrays