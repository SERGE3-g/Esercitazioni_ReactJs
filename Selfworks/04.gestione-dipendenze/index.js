//import { formatDistance } from "date-fns";
import { formatDistanceStrict } from "date-fns";
//import { it } from "date-fns/locale";
// const date = new Date(2021, 0, 1);
// const distance = formatDistance(date, new Date(), { locale: it });

// console.log(distance);

//Qual è la distanza in minuti dal 1° gennaio 2016 al 1° gennaio 2015?
const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
    unit: 'minute'
  })
  
  console.log("la a distanza in minuti è:",result) 

  
  //Qual è la distanza in ore dal 1° gennaio 2016 al 1° gennaio 2015?
  const result2 = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
    unit: 'hour'
  })
  
  console.log("la a distanza in ore è:",result2)

  //Qual è la distanza in giorni dal 1° gennaio 2016 al 1° gennaio 2015?

  const result3 = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
    unit: 'day'
  })
  
  console.log("la a distanza in giorni è:",result3)






