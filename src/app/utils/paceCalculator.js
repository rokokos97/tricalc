export function paceCalculator(distance=1, time=[0, 0, 0]) {
  const timeHour = parseInt(time[0]);
  const timeMinute = parseInt(time[1]);
  const timeSecond = parseInt(time[2]);

  const totalTimeInSeconds = timeHour * 3600 + timeMinute * 60 + timeSecond;


  const paceInSeconds = (totalTimeInSeconds / distance).toFixed(2);
  const paceInMinutes = Math.floor(paceInSeconds / 60).toString();
  const paceInSecondsMSeconds = (paceInSeconds - paceInMinutes * 60).toFixed(1);
  const paceSeconds = (paceInSecondsMSeconds.split('.')[0]);
  const paceMSeconds = (paceInSecondsMSeconds.split('.')[1]);
  return [paceInMinutes, paceSeconds, paceMSeconds];
}

console.log(paceCalculator(undefined, [0, 0, 0]));


