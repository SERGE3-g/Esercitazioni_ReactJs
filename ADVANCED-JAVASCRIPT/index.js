


const book=[
    {
        id : 1,
        title : 'Il signore degli anelli',
        author : 'J.R.R. Tolkien',
        year : 1954,
        pages : 1200,
        price : 20,
        genre : 'fantasy'
    },
    {
        id : 2,
        title : 'Il vecchio e il mare',
        author : 'Ernest Hemingway',
        year : 1952,
        pages : 200,
        price : 15,
        genre : 'drama'
    },
    {
        id : 3,
        title : 'Il nome della rosa',
        author : 'Umberto Eco',
        year : 1980,
        pages : 500,
        price : 25,
        genre : 'thriller'
    },
    {
        id : 4,
        title : 'Il ritratto di Dorian Gray',
        author : 'Oscar Wilde',
        year : 1890,
        pages : 250,
        price : 10,
        genre : 'drama'
    },
    {
        id : 5,
        title : 'Il buio oltre la siepe',
        author : 'Harper Lee',
        year : 1960,
        pages : 300,
        price : 18,
        genre : 'drama'
    },
    {
        id : 6,
        title : 'Il piccolo principe',
        author : 'Antoine de Saint-Exupéry',
        year : 1943,
        pages : 100,
        price : 12,
        genre : 'fantasy'
    },
    {
        id : 7,
        title : 'Il nome del vento',
        author : 'Patrick Rothfuss',
        year : 2007,
        pages : 800,
        price : 30,
        genre : 'fantasy'
    },
    {
        id : 8,
        title : 'Il giovane Holden',
        author : 'J.D. Salinger',
        year : 1951,
        pages : 150,
        price : 14,
        genre : 'drama'
    },
    {
        id : 9,
        title : 'Il grande Gatsby',
        author : 'F. Scott Fitzgerald',
        year : 1925,
        pages : 200,
        price : 16,
        genre : 'drama'
    },
    {
        id : 10,
        title : 'Il vecchio e il mare',
        author : 'Ernest Hemingway',
        year : 1952,
        pages : 200,
        price : 15,
        genre : 'drama'
    }
]


// function per il filtro di un array di oggetti
function CallbackPerLoSconto(price){
    const sconto= price*0.85;
    return sconto;
}

function copyMapJavascript(array,Callback){
    const priceFinal=[];
    for(let i=0;i<array.length;i++){
        priceFinal.push(Callback(array[i].price))
    }
    return priceFinal;
}

console.log(copyMapJavascript(book,Callback));




//javascript asincrono con callback
//che cosa è javascript asincrono?

// gestione delle Operazioni Asincrone in JavaScript

//con event Handler
//con callback
//con promise
//con async/await

//come funziona asyn/await?
//async/await è una combinazione di due caratteristiche: async e await. 
//async è una parola chiave che viene utilizzata per dichiarare una funzione asincrona. 
//await è una parola chiave che viene utilizzata per sospendere l'esecuzione di una funzione asincrona fino 
//a quando la promessa non viene risolta o rifiutata. async/await è una sintassi più pulita e più leggibile 
//rispetto alle promesse.

//che cosa è API?
//API è l'acronimo di Application Programming Interface.
//API è un insieme di regole e protocolli che permettono a due software di comunicare tra loro.
//API definisce le regole per la comunicazione tra due software.
//API permette a due software di comunicare tra loro.
//API definisce le regole per la comunicazione tra due software.

