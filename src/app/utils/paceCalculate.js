export function paceCalculate(distance=1, time=[0, 0, 0]) {
  const timeInHour = parseInt(time[0]);
  const timeInMinute = parseInt(time[1]);
  const timeInSecond = parseInt(time[2]);

  const totalTimeInSeconds = timeInHour * 3600 + timeInMinute * 60 + timeInSecond;
  const totalPaceInSeconds = (totalTimeInSeconds / distance).toFixed(2);

  const paceInHours = Math.floor(totalPaceInSeconds/3600).toString();
  const paceInMinutes = Math.floor((totalPaceInSeconds-(paceInHours*3600)) / 60).toString();

  const paceInSecondsMSeconds = (totalPaceInSeconds - (paceInHours*3600)-(paceInMinutes*60)).toFixed(1).toString();

  const paceInSeconds = paceInSecondsMSeconds.split('.')[0];
  const paceInMSeconds = (paceInSecondsMSeconds.split('.')[1]);

  return [paceInHours, paceInMinutes, paceInSeconds, paceInMSeconds];
}


