const studente = {
    name: 'Mario Rossi',
    eta: 30,
    Materie: ['Matematica', 'Scienze', 'Filosofia'],
    Indirizzo: {
      strada: 'Via Padella',
      citta: 'Roma',
      Stato: 'IT',
      cap: '33333'
    }
  };
  
  const dipendente = {
    nome: 'Giuseppe Verdi',
    eta: 40,
    Ruolo: 'Sviluppatore',
    Indirizzo: {
      strada: 'Via Forno',
      citta: 'Milano',
      Stato: 'IT',
      cap: '22222'
    }
  };
  
  
  // Crea le variabili 
  // nomeStudente , etaStudente ed estrai il suo valore dal nome e dall eta 
  // scienze ed estrai il suo valore da Materie in seconda posizione 
  // strada, citta, stato ed estrai il loro valore dall'oggetto Indirizzo 
    // cap ed estrai il suo valore dall'oggetto Indirizzo
    

   // estraggo i valori da studente e li assegno alle variabili
    
    const { name: nomeStudente, eta: etaStudente } = studente;
    const { Materie: [, scienze] } = studente;
    const { Indirizzo: { strada, citta, Stato }, Indirizzo: { cap } } = studente;
    
    console.log(nomeStudente, etaStudente, scienze, strada, citta, Stato, cap);
    




