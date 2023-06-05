import {distanceArr} from '../data/triDistanceOptions';
export function calculateTriRaceTime(
    distance='sprint',
    swimPace=['0', '0'],
    t1=['0', '0'],
    bikeSpeed=['1'],
    t2=['0', '0'],
    runPace=['0', '0'],
) {
  const index = distanceArr.findIndex((item) => item.name === distance);
  const currentDistance = distanceArr[index];

  const swimTime = (parseInt(swimPace[0]) * 60 + parseInt(swimPace[1]))*currentDistance.swim;
  const t1Time = parseInt(t1[0]) * 60 + parseInt(t1[1]);
  const bikeTime = currentDistance.bike / (bikeSpeed / 3600);
  const t2Time = parseInt(t2[0]) * 60 + parseInt(t2[1]);
  const runTime = (parseInt(runPace[0]) * 60 + parseInt(runPace[1]))*currentDistance.run;

  const totalTime = swimTime + t1Time + bikeTime + t2Time + runTime;

  const hours = Math.floor(totalTime / 3600).toString();
  const minutes = Math.floor((totalTime % 3600) / 60).toString();
  const seconds = (totalTime % 60).toFixed().toString();

  return [hours, minutes, seconds];
}
