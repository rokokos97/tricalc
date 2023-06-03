export function paceCalculator(distance, time) {
  if (distance===0 || !distance) {
    return [0, 0, 0];
  }

  const totalSeconds = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
  const paceInSeconds = (totalSeconds / distance).toFixed(2);
  const paceInMinutes = Math.floor(paceInSeconds / 60).toString();
  const paceInSecondsMSeconds = (paceInSeconds - paceInMinutes * 60).toFixed(1);
  const paceSeconds = (paceInSecondsMSeconds.split('.')[0]);
  const paceMSeconds = (paceInSecondsMSeconds.split('.')[1]);
  return [paceInMinutes, paceSeconds, paceMSeconds];
}


