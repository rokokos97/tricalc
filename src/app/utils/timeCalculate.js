export function timeCalculate(distance, pace) {
  const paceInSeconds = (parseInt(pace[0]) * 60) + parseInt(pace[1]) + (parseInt(pace[2]) / 1000);
  const totalSeconds = distance * paceInSeconds;
  const hours = Math.floor(totalSeconds / 3600).toString();
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString();
  const seconds = Math.floor(totalSeconds % 60).toString();
  return [hours, minutes, seconds];
}
