import {distanceArr} from '../data/triDistanceOptions';
export function calculateRaceTime(distance, swimPace, t1, bikeSpeed, t2, runPace) {
  console.log(distance, swimPace, t1, bikeSpeed, t2, runPace);
  const index = distanceArr.findIndex((item) => item.name === distance);
  const currentDistance = distanceArr[index];
  const swimTime = (parseInt(swimPace[0]) * 60 + parseInt(swimPace[1]))*currentDistance.swim;
  const t1Time = parseInt(t1[0]) * 60 + parseInt(t1[1]);
  const bikeTime = currentDistance.bike / (bikeSpeed / 3600);
  const t2Time = parseInt(t2[0]) * 60 + parseInt(t2[1]);
  const runTime = (parseInt(runPace[0]) * 60 + parseInt(runPace[1]))*currentDistance.run;
  const totalTime = swimTime + t1Time + bikeTime + t2Time + runTime;
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = (totalTime % 60).toFixed();

  return `${hours} : ${minutes.toString().padStart(2, '0')}' : ${seconds.toString().padStart(2, '0')}"`;
}
