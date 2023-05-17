export function runPaceCalculator(hours, minutes, seconds, distance) {
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  const paceInSeconds = totalSeconds / parseInt(distance);
  const paceInMinutes = Math.floor(paceInSeconds / 60);
  const paceInMSeconds = Math.round(
      (paceInSeconds - paceInMinutes * 60));
  return `${paceInMinutes}'${paceInMSeconds}"`;
}


