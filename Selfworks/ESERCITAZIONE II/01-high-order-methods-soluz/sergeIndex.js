/*
    ### PRIMO ESERCIZIO
 your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. the format is: n: string. notice the colon and space in between.

ex. number([]) => []
    number(["a", "b", "c"]) => ["1: a", "2: b", "3: c"]

### SECONDO ESERCIZIO
We are going to write a function called arrayDiff that will accept two arrays, a and b, as arguments.
 You are given two arrays. The goal of the function is to remove all values in array a that is present in array b.
  The function should return the array after all the common values have been removed.

ex. arrayDiff([], [4,5]) => []
    arrayDiff([3,4], [3]) => [4]
    arrayDiff([1,8,2], []) => [1, 8, 2]
 */


                                    //  PRIMO ESERCIZIO
// 1. Creo una funzione chiamata number che accetta un array di stringhe
// 2. Creo una variabile chiamata result e la inizializzo con un array vuoto
// 3. Creo un ciclo for che parte da 0 e finisce alla lunghezza dell'array
// 4. All'interno del ciclo for, pusho nell'array result la stringa con il numero incrementale e i due punti
// 5. Ritorno l'array result

function number(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(`${i + 1}: ${array[i]}`);
    }
    return result;
}
console.log(number(["a", "b", "c"]));


                                    //  SECONDO ESERCIZIO
// 1. Creo una funzione chiamata arrayDiff che accetta due array come argomenti
// 2. Ritorno l'array a filtrato con il metodo filter
// 3. All'interno del metodo filter, controllo se l'elemento dell'array a è presente nell'array b
// 4. Se non è presente, ritorno l'elemento

function arrayDiff(a, b) {
     return a.filter((el) => b.indexOf(el) === -1);
}
console.log(arrayDiff([3,4], [3]));




