export function timeCalculate(distance=1, pace=['0', '0', '0']) {
  const paceInSeconds = (parseInt(pace[0]) * 60) + parseInt(pace[1]) + (parseInt(pace[2]) / 1000);
  const timeInSeconds = distance * paceInSeconds;
  const hours = Math.floor(timeInSeconds / 3600).toString();
  const minutes = Math.floor((timeInSeconds % 3600) / 60).toString();
  const seconds = Math.floor(timeInSeconds % 60).toString();
  return [hours, minutes, seconds];
}
