export function paceCalculator(distance=1, time=[0, 0, 0]) {
  const timeHour = parseInt(time[0]);
  const timeMinute = parseInt(time[1]);
  const timeSecond = parseInt(time[2]);

  const totalTimeInSeconds = timeHour * 3600 + timeMinute * 60 + timeSecond;
  const totalPaceInSeconds = (totalTimeInSeconds / distance).toFixed(2);
  console.log('totalPaceInSeconds', totalPaceInSeconds);
  const paceInHours = Math.floor(totalPaceInSeconds/3600).toString();
  console.log('paceInHours', paceInHours);
  const paceInMinutes = Math.floor((totalPaceInSeconds-(paceInHours*3600)) / 60).toString();
  console.log('paceInMinutes', paceInMinutes);
  const paceInSeconds = (totalPaceInSeconds - (paceInHours*3600)-(paceInMinutes*60)).toFixed(1).toString();
  console.log('paceInSeconds', paceInSeconds);
  const paceInSecondsFinal = paceInSeconds.split('.')[0];
  const paceInMSeconds = (paceInSeconds.split('.')[1]);
  console.log('paceInMSeconds', paceInMSeconds);
  console.log([paceInHours, paceInMinutes, paceInSecondsFinal, paceInMSeconds]);
  return [paceInHours, paceInMinutes, paceInSecondsFinal, paceInMSeconds];
}

console.log(paceCalculator(undefined, [0, 0, 0]));


