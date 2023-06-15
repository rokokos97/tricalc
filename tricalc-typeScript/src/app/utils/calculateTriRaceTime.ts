import { distanceArr } from '../data/options'
import { type IDistance } from '../../interfaces'
export function calculateTriRaceTime (
  distance: string | null = 'sprint',
  swimPace: string[] = ['0', '0'],
  t1: string[] = ['0', '0'],
  bikeSpeed: string[] = ['1'],
  t2: string[] = ['0', '0'],
  runPace: string[] = ['0', '0']
): string[] {
  const index: number = distanceArr.findIndex((item) => item.name === distance)
  const currentDistance: IDistance = distanceArr[index]

  const swimTime: number = (parseInt(swimPace[0]) * 60 + parseInt(swimPace[1])) * currentDistance.swim
  const t1Time: number = parseInt(t1[0]) * 60 + parseInt(t1[1])
  const bikeTime: number = currentDistance.bike / (parseInt(bikeSpeed[0]) / 3600)
  const t2Time: number = parseInt(t2[0]) * 60 + parseInt(t2[1])
  const runTime: number = (parseInt(runPace[0]) * 60 + parseInt(runPace[1])) * currentDistance.run

  const totalTime: number = swimTime + t1Time + bikeTime + t2Time + runTime

  const hours: any = Math.floor(totalTime / 3600).toString()
  const minutes: any = Math.floor((totalTime % 3600) / 60).toString()
  const seconds: any = (totalTime % 60).toFixed().toString()

  return [hours, minutes, seconds]
}
