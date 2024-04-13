import { add } from "date-fns";
import { formatDistance } from "date-fns";
import { formatDistanceStrict } from "date-fns";
import { formatDuration } from 'date-fns';
import { formatISO } from "date-fns";
import { formatISO9075 } from "date-fns";
import { intervalToDuration } from "date-fns";
import { intlFormat } from "date-fns";
import { it } from "date-fns/locale";
import { set } from "date-fns";

const date = new Date();
const newDate = add(date, { days: 3 });
const distance = formatDistance(date, newDate, { locale: it });
const distanceStrict = formatDistanceStrict(date, newDate, { locale: it });
const duration = formatDuration({ hours: 1, minutes: 30 });
const iso = formatISO(date);
const iso9075 = formatISO9075(date);
const durationFromInterval = intervalToDuration({ start: date, end: newDate });
//const formattedDate = intlFormat(date, { locale: it });
const setDate = set(date, { year: 2020 });

console.log(`Date: ${date}`, `New Date: ${newDate}`, `Distance: ${distance}`, 
`Distance Strict: ${distanceStrict}`, `Duration: ${duration}`, `ISO: ${iso}`, 
`ISO 9075: ${iso9075}`, `Duration from Interval: ${durationFromInterval}`, `Set Date: ${setDate}`);