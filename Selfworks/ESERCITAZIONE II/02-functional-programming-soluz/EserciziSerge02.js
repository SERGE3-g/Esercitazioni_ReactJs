/*
    ### PRIMO ESERCIZIO
 Definisci una serie di funzioni:
add che prende due numeri e restituisce la loro somma.
multiply che prende due numeri e restituisce il loro prodotto.
subtract che prende due numeri e restituisce la loro differenza.
divide che prende due numeri e restituisce il risultato della divisione.
Poi, crea una funzione calculate che prenda tre argomenti: due numeri e una stringa che rappresenta l'operazione da eseguire ("add", "multiply",
"subtract" o "divide"). La funzione deve eseguire l'operazione corrispondente sui numeri.

### SECONDO ESERCIZIO
 Crea un array di prodotti. ogni prodotto è un oggetto con i seguenti attributi:
- name
- brand
- price
- quantity
Generare una funzione manipulate che accetta in input la lista dei prodotti e una callback che manipola i prodotti.
Generare delle funzioni che manipolano i prodotti in maniera diversa e passare queste funzioni alla funzione manipulate
Le callback possono filtrare i prodotti in base a delle caratteristiche particolari, possono ottenere il prezzo totale dei prodotti, il prezzo totale
dei prodotti di uno specifico brand, ritornare per ogni brand la quantità di prodotti presenti, ecc..

 */
function spazio() {
    return console.log(" ");
}
console.log("--------------------------- INIZIO ESERCIZIO 1--------------------------------- ");
// PRIMO ESERCIZIO
// Definisco una serie di funzioni:
// add che prende due numeri e restituisce la loro somma.
// multiply che prende due numeri e restituisce il loro prodotto.
// subtract che prende due numeri e restituisce la loro differenza.
// divide che prende due numeri e restituisce il risultato della divisione.
// Poi, creo una funzione calculate che prenda tre argomenti:
// due numeri e una stringa che rappresenta l'operazione da eseguire ("add", "multiply",
// "subtract" o "divide"). La funzione deve eseguire l'operazione corrispondente sui numeri.



function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }

    return a / b;
}

// Calcola l'operazione tra due numeri
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return add(a, b);
        case "multiply":
            return multiply(a, b);
        case "subtract":
            return subtract(a, b);
        case "divide":
            return divide(a, b);
        default:
            return "Error: Unknown operation";
    }
}




console.log(calculate(2, 3, "add")); // 5
console.log(calculate(2, 3, "multiply")); // 6
console.log(calculate(2, 3, "subtract")); // -1
console.log(calculate(2, 3, "divide")); // 0.6666666666666666



console.log("========================================= INIZIO ESERCIZIO 2 ==========================================");
// SECONDO ESERCIZIO
// Crea un array di prodotti. ogni prodotto è un oggetto con i seguenti attributi:
// - name
// - brand
// - price
// - quantity
//Genero una funzione manipulate che accetta in input la lista dei prodotti e una callback che manipola i prodotti.
//Genero delle funzioni che manipolano i prodotti in maniera diversa e passo queste funzioni alla funzione manipulate
//Le callback possono filtrare i prodotti in base a delle caratteristiche particolari, possono ottenere il prezzo totale dei prodotti, il prezzo totale
//dei prodotti di uno specifico brand, ritornare per ogni brand la quantità di prodotti presenti, ecc..

const products = [

    {name: "Smartphone", brand: "Samsung", price: 500, quantity: 10},
    {name: "Smartwatch", brand: "Apple", price: 300, quantity: 5},
    {name: "Laptop", brand: "Asus", price: 700, quantity: 7},
    {name: "Tablet", brand: "Apple", price: 400, quantity: 3},
    {name: "Airpods", brand: "Apple", price: 600, quantity: 2},
    {name: "TV", brand: "Samsung", price: 1000, quantity: 1},
    {name: "Headphones", brand: "Sony", price: 200, quantity: 4},
    {name: "Laptop", brand: "Lenovo", price: 1450, quantity: 6},
    {name: "Iphone 15 Pro", brand: "Apple", price: 1500, quantity: 8}
];


// Funzione che manipola i prodotti
function manipulate() {
    setTimeout(() => {
        products.forEach(product =>
            console.log(product));
    }, 1000);
}
console.log("Lista dei prodotti");
manipulate();
console.log("=======================================================================================================");

// Funzione che filtra i prodotti in base al brand
function filterByBrand(brand) {
    setTimeout(() => {
        const filteredProducts = products.filter(product => product.brand === brand);
        console.log(filteredProducts);
    }, 1000);
}
filterByBrand("Apple");


// Funzione che calcola il prezzo totale dei prodotti
function totalPrice() {
    setTimeout(() => {
        const total = products.reduce((acc, product) => acc + product.price, 0);
        console.log(total);
    }, 1000);
}

totalPrice();

// Funzione che calcola il prezzo totale dei prodotti di uno specifico brand
function totalPriceByBrand(brand) {
    setTimeout(() => {
        const total = products
            .filter(product => product.brand === brand)
            .reduce((acc, product) => acc + product.price, 0);
        console.log(total);
    }, 1000);
}

totalPriceByBrand("Apple");

// Funzione che ritorna per ogni brand la quantità di prodotti presenti
function quantityByBrand() {
    setTimeout(() => {
        const brands = products.map(product => product.brand);
        const uniqueBrands = [...new Set(brands)];

        uniqueBrands.forEach(brand => {
            const quantity = products
                .filter(product => product.brand === brand)
                .reduce((acc, product) => acc + product.quantity, 0);
            console.log(`${brand}: ${quantity}`);
        });
    }, 1000);
}

quantityByBrand();

// Funzione che ritorna per ogni brand il prezzo totale dei prodotti
function totalPriceByBrand() {
    setTimeout(() => {
        const brands = products.map(product => product.brand);
        const uniqueBrands = [...new Set(brands)];

        uniqueBrands.forEach(brand => {
            const total = products
                .filter(product => product.brand === brand)
                .reduce((acc, product) => acc + product.price, 0);
            console.log(`${brand}: ${total}`);
        });
    }, 1000);
}

totalPriceByBrand(" ");
function spazioVuoto() {
    return console.log("");
}
spazioVuoto();







