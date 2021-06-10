const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;

const formatter = (value: number): string => {
  const n = Math.floor(value);
  return n < 10 ? '0' + n : String(n);
}

export const countdown = (end: number): string => {
  const diff = end - Date.now();
  const rHours = formatter(diff / hours);
  const totalHours = parseInt(rHours) * hours;
  const rMinutes = formatter((diff - totalHours) / minutes);
  const totalMinutes = parseInt(rMinutes) * minutes;
  const rSeconds = formatter((diff - totalMinutes - totalHours) / seconds);

  console.log(diff, hours, minutes, seconds)

  return `${rHours}:${rMinutes}:${rSeconds}`
}
