const otherPlayer = "Tommaso";

function getInfoGame() {
    const player = "Alessandra";
    const playersNumbers = 2;
    const rules = ['admin', 'normal player'];
    // Se uso un blocco dentro una funzione posso accedere ai dati all'esterno? SI PUOI!
    for (let i = 0; i < rules.length; i++) {
        console.log(rules[i]);
    }
    return `il giocatore ${player}`
}

// Che succede se voglio accedere a dati definiti all'interno di una funzione dall'esterno?
// console.log(player); not defined

getInfoGame();


// se non posso accedere direttamente ai dati definiti dentro una funzione per il suo function scope? Come faccio ad accedervi dall'esterno?
// La funzio







