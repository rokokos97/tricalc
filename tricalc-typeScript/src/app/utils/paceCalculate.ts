export function paceCalculate (distance: number = 1, time: string[] = ['0', '0', '0']): string[] {
  const timeInHour: number = parseInt(time[0])
  const timeInMinute: number = parseInt(time[1])
  const timeInSecond: number = parseInt(time[2])

  const totalTimeInSeconds: any = timeInHour * 3600 + timeInMinute * 60 + timeInSecond
  const totalPaceInSeconds: any = (totalTimeInSeconds / distance).toFixed(2)

  const paceInHours: any = Math.floor(totalPaceInSeconds / 3600).toString()
  const paceInMinutes: any = Math.floor((totalPaceInSeconds - (paceInHours * 3600)) / 60).toString()

  const paceInSecondsMSeconds: any = (totalPaceInSeconds - (paceInHours * 3600) - (paceInMinutes * 60)).toFixed(1).toString()

  const paceInSeconds: any = paceInSecondsMSeconds.split('.')[0]
  const paceInMSeconds: any = (paceInSecondsMSeconds.split('.')[1])

  return [paceInHours, paceInMinutes, paceInSeconds, paceInMSeconds]
}
