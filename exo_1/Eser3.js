/*
 You will be given an array of objects representing data about developers who have signed up to attend
  the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

const list1 = [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
              { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },
              { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' }, 
              { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' },];

your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }


Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.



*/


// Solution 1
// Nella prima soluzione ho usato map per creare un array con i pasti degli sviluppatori e forEach per contare quante volte appare un pasto

// function orderFood(list) {
//     const meals = list.map(dev => dev.meal); // ho usato map per creare un array con i pasti degli sviluppatori
//     const counts = {}; 
//     meals.forEach((meal) => { // ho usato forEach per contare quante volte appare un pasto
//       counts[meal] = counts[meal] ? counts[meal] + 1 : 1; // ho usato un operatore ternario per incrementare il contatore
//     });
//     return counts;
//   }
  
//     // Test cases
    
// const list1 = [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
//                 { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },
//                 { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' }, 
//                 { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' }];
                
// console.log(orderFood(list1)); // { vegetarian: 2, standard: 1, vegan: 1 }



/* Solution 2*/
// Nella seconda soluzione ho usato forEach per contare quante volte appare un pasto e un operatore ternario per incrementare il contatore

function orderFood(list) {
    let meals = {};
    list.forEach((dev) => { // ho usato forEach per contare quante volte appare un pasto
      meals[dev.meal] = meals[dev.meal] ? meals[dev.meal] + 1 : 1; // ho usato un operatore ternario per incrementare il contatore
    });
    return meals;
  }
      
     // Test cases
     
const list1 = [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
                { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },
                { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' }, 
                { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' }];
                
console.log(orderFood(list1)); // { vegetarian: 2, standard: 1, vegan: 1 }



// Solution 3
// Nella terza soluzione ho usato un ciclo for per contare quante volte appare un pasto e un operatore ternario per incrementare il contatore 

// function orderFood(list) {
//     let meals = {};
//   for (let i = 0; i < list.length; i++) { // ho usato un ciclo for per contare quante volte appare un pasto
//     meals[list[i].meal] = meals[list[i].meal] ? meals[list[i].meal] + 1 : 1; // ho usato un operatore ternario per incrementare il contatore
//   }
//   return meals;
// }

//     // Test cases

// const list1 = [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
//                 { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' }, 
//                 { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' },   
//                 { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' }];

// console.log(orderFood(list1)); // { vegetarian: 2, standard: 1, vegan: 1 }

                