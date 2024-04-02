/*
You will be given an array of objects representing data about developers who have signed up to attend the next 
web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is  at most 2 times
 higher than the number of developers representing any of the remaining programming languages; or
false otherwise.
For example, given the following input array:

const list1 = [{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' }, 
{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' }, 
{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' }, 
{ firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' }, 
{ firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }];

your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). 
It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way 
(e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.


*/

// Solution 1

// function isLanguageDiverse(list) {
//     const languages = list.map(dev => dev.language); // ho usato map per creare un array con i linguaggi degli sviluppatori
//     const counts = {};
//     languages.forEach((language) => {            // ho usato forEach per contare quante volte appare un linguaggio
//       counts[language] = counts[language] ? counts[language] + 1 : 1;  // ho usato un operatore ternario per incrementare il contatore
//     });
//     const countsValues = Object.values(counts);    // ho usato Object.values per ottenere i valori dell'oggetto counts
//     const maxCount = Math.max(...countsValues);    // ho usato Math.max per trovare il valore massimo
//     const minCount = Math.min(...countsValues);    // ho usato Math.min per trovare il valore minimo
//     return maxCount <= 2 * minCount;               // ho usato un operatore ternario per restituire true o false
//   }
  
//     // Test cases 
    
// const list1 = [{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//                { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' }, 
//                { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' }, 
//                { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' }, 
//                { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' }, 
//                { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }];

            
// const list2 = [{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//                 { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' }, 
//                 { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' }, 
//                 { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' }, 
//                 { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' }, 
//                 { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' },
//                 { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }];

// console.log(isLanguageDiverse(list1)); // false
// console.log(isLanguageDiverse(list2)); // true

// Nel primo caso di test, il numero di sviluppatori JavaScript (3) è 3 volte superiore al numero di sviluppatori Python (1), quindi la funzione dovrebbe restituire false.

// Nel secondo caso di test, il numero di sviluppatori JavaScript (4) è 2 volte superiore al numero di sviluppatori Python (1), quindi la funzione dovrebbe restituire true.

// Se vuoi, puoi provare a risolvere questo esercizio senza usare map, forEach, Math.max, Math.min o Object.values. Puoi usare solo un ciclo for e un oggetto per tenere traccia del numero di sviluppatori per ogni linguaggio di programmazione.




/* Solution 2 */
function isLanguageDiverse(list) {
    const counts = {};
    for (let i = 0; i < list.length; i++) {   // ho usato un ciclo for per contare quante volte appare un linguaggio
      const language = list[i].language;     // ho assegnato il linguaggio corrente a una variabile
      counts[language] = counts[language] ? counts[language] + 1 : 1; // ho usato un operatore ternario per incrementare il contatore
    }
    const countsValues = Object.values(counts); // ho usato Object.values per ottenere i valori dell'oggetto counts
    const maxCount = Math.max(...countsValues); // ho usato Math.max per trovare il valore massimo
    const minCount = Math.min(...countsValues); // ho usato Math.min per trovare il valore minimo
    return maxCount <= 2 * minCount;           // ho usato un operatore ternario per restituire true o false
  }

//Test cases

const list1 = [{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
{ firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
{ firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }];

const list2 = [{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
{ firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
{ firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' },
{ firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }];

console.log(isLanguageDiverse(list1)); // false
console.log(isLanguageDiverse(list2)); // true