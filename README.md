 ## ESERCITAZIONE 

### 1. Higher-Order Functions Series - Find the most senior developer

```javascript

You will be given a sequence of objects representing data about developers who have signed up to attend the next 
coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. 
In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
For example, given the following input array:

const list1 = [{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
{ firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
{ firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' }];

your function should return the following array:

[{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language:'PHP' },
{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' }]



### 2. Higher-Order Functions Series - Is the meetup language-diverse?


You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is  at most 2 times higher than the number of developers representing any of the remaining programming languages; or
false otherwise.
For example, given the following input array:

const list1 = [{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' }, { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' }, { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' }, { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' }, { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }];

your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.




### 3. Higher-Order Functions Series - Order the food
    
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you
are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

const list1 = [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' }, { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' },];

your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }


Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.





