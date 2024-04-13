import { formatDistance } from "date-fns";
import { formatDistanceStrict } from "date-fns";
import { formatDuration } from 'date-fns';
import { formatISO } from "date-fns";
import { formatISO9075 } from "date-fns";
import { intervalToDuration } from "date-fns";
import { intlFormat } from "date-fns";
import { it } from "date-fns/locale";
import { set } from "date-fns";

const date = new Date(2024, 0, 1);
 const distance = formatDistance(date, new Date(), { locale: it });

console.log(distance);

//Qual è la distanza in minuti dal 1° gennaio 2024 al 1° gennaio 2023?
const result = formatDistanceStrict(new Date(2024, 0, 1), new Date(2023, 0, 1), {
    unit: 'minute'
  })
  
  console.log("la a distanza in minuti è:",result) 

  
  //Qual è la distanza in ore dal 1° gennaio 2016 al 1° gennaio 2015?
  const result2 = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
    unit: 'hours'
  })
  
  console.log("la a distanza in ore è:",result2)

  //Qual è la distanza in giorni dal 1° gennaio 2016 al 1° gennaio 2015?

  const result3 = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
    unit: 'days'
  })
  
  console.log("la a distanza in giorni è:",result3)

 

  //Rappresenta il 18 settembre 2024 nel formato ISO 8601 (il fuso orario locale è UTC):
  const resul = formatISO(new Date(2024, 8, 18, 19, 0, 52))
  
  console.log("il fuso orario locale è:",resul)
  
  //Rappresenta il 18 settembre 2023 in ISO 8601, formato breve (il fuso orario locale è UTC):
  const res = formatISO(new Date(2023, 8, 18, 19, 0, 52), { format: 'basic' })
  
  console.log("formato breve è:",res)
  
  //Rappresenta il 18 settembre 2023 in formato ISO 8601, solo data:
  const re = formatISO(new Date(2023, 8, 18, 19, 0, 52), { representation: 'date' })
  
  console.log("La data è:",re)
  
  //Rappresenta il 11 Aprile 2024 in formato ISO 8601, solo ora (il fuso orario locale è UTC):
  const rest = formatISO(new Date(2024, 3, 11, 19, 0, 52), { representation: 'time' })

  console.log(`L'ora è: ${rest}`);

  // Calcolo della durata in ore, minuti e millisecondi 
  const duration = formatDuration({
    hours: 0,
    minutes: 0,
    seconds: 35,
    milliseconds: 123,
  });
  
  console.log(`La durata è: ${duration}`);

  // Calcolo della durata in giorni, ore, minuti e secondi
  const duration2 = formatDuration({
    days: 2,
    hours: 3,
    minutes: 30,
    seconds: 15,
  });
  
  console.log(`La durata è: ${duration2}`);
  
  // Calcolo della durata in anni, mesi, giorni, ore, minuti e secondi
  const durata = formatDuration({
    years: 2,
    months: 3,
    days: 15,
    hours: 3,
    minutes: 30,
    seconds: 15,
  });
  
  console.log(`La durata è: ${durata}`);

  
  //Ottieni la durata tra il 1 gennaio 1999 e il 11 aprile 2024.
  const interval= intervalToDuration({
    start: new Date(1999, 0, 1),
    end: new Date(2024, 3, 11),
  });
  console.log(`La durata è: ${interval}`);

  //Ottieni la durata tra il 18 gennaio 1999 e il 11 aprile 2024, in anni, mesi e giorni.
  const toDuration = intervalToDuration({
    start: new Date(1999, 0, 18),
    end: new Date(2024, 3, 11),
  });

  console.log(`La durata è: ${toDuration}`);

  //Rappresenta il 4 ottobre 2019 in formato middle-endian:
const data = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
console.log(`La data è: ${data}`)

//Rappresenta il 4 ottobre 2019 in formato short:
const data2 = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), { dateStyle: 'short' })
console.log(`La data è: ${data2}`)

//Rappresenta il 4 ottobre 2019 in formato long:
const data3 = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), { dateStyle: 'long' })
console.log(`La data è: ${data3}`)

  
//Imposta la data al 1° gennaio 2023: 
const mySet= set(new Date(2024, 0, 1), { month: 1 })
console.log(`La data corretta è: ${mySet}`)

//Imposta la data al 11° aprile 2024 e l'ora a mezzogiorno:
const mySet2= set(new Date(2024, 3, 11, 19, 0, 52), { hours: 12 })
console.log(`L'ora è: ${mySet2}`)

//Imposta dalle 12:00 al 1° settembre 2014 dalle 01:23:45 al 1° settembre 2014 alle 12:00:00:

const myResult = set(new Date(2024, 8, 10, 10, 23, 45), { hours: 12 })
console.log(`L'ora è: ${myResult}`)



  
  

  



