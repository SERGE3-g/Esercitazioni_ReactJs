
function stampaVuoto() {
 return "";
}
console.log(stampaVuoto("")+"==================================== STAMPO SINGOLA AUTO INSERITA  ===========================================================");

/*
   PRIMO ESERCIZIO
Partendo da una struttura dati che salva i modelli di auto presenti nel nostro store.

const databaseCars = [
    { brand: "BMW", model: "x-123"  },
    { brand: "Fiat", model: "500" }
]

Creare 2 funzioni con tempi di esecuzione diversi ( strutta setTimeout )
- Una funzione cicla sui nostri prodotti e stampa un output in console con i prodotti presenti in cars
- Una funzione si occuperá di inserire un nuovo modello di auto nel nostro db.

L'obiettivo é quello di regolarizzare la pila di funzioni in esecuzione riusciendo a trovare il risultato sperato.

Note:
Usa tutte le funzionalitá JavaScript che conosci per fare l'esercizio.

 */



// Struttura dati
const databaseCars = [
    { brand: "BMW", model: "x-123"  },
    { brand: "Fiat", model: "500" },
    { brand: "Mercedes", model: "GLA" },
    { brand: "Audi", model: "A3" },
    { brand: "Volkswagen", model: "Golf" },
    { brand: "Ford", model: "Fiesta" },
    { brand: "Renault", model: "Clio" },
    { brand: "Peugeot", model: "208" },
    { brand: "Toyota", model: "Yaris" },
    { brand: "Citroen", model: "C3" }
]


function printCars() {
    setTimeout(() => {
        databaseCars.forEach(car => console.log(`Brand: ${car.brand}, Model: ${car.model}`));
    }, 2000);// 2 secondi
}

// Funzione per aggiungere una nuova auto al database in un secondo
function insertCar(brand, model) {
    setTimeout(() => {
        databaseCars.push({ brand, model });
    }, 1000); // 1 secondo
}

// Aggiungo una nuova auto al database

insertCar("Opel", "Corsa");
insertCar("Seat", "Ibiza");
insertCar("Skoda", "Fabia");

// Stampo le auto presenti nel database
printCars();

//stampo singola auto inserita
console.log("Brand: Opel, Model: Corsa");
console.log("Brand: Seat, Model: Ibiza");
console.log("Brand: Skoda, Model: Fabia");

console.log("==================================== INIZIO A STAMPARE CON I TEMPI DE ====================================================");
