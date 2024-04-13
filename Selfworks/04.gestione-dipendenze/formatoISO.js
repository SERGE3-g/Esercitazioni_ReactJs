import { formatISO } from "date-fns";

//Rappresenta il 18 settembre 2023 nel formato ISO 8601 (il fuso orario locale è UTC):
const result = formatISO(new Date(2023, 8, 18, 19, 0, 52))

console.log(result)

















export default formatISO;