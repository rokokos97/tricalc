export function runPaceCalculator(hours, minutes, seconds, distance) {
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  const paceInSeconds = (totalSeconds / distance).toFixed(2);
  console.log('paceInSeconds', paceInSeconds);
  const paceInMinutes = Math.floor(paceInSeconds / 60);
  console.log(paceInMinutes);
  const paceInMSeconds = (paceInSeconds - paceInMinutes * 60).toFixed(1);
  return `${paceInMinutes}'${paceInMSeconds}"`;
}


