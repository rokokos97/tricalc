export function timeCalculate (distance: number = 1, pace: string[] = ['0', '0', '0']): string[] {
  const paceInSeconds: number = (parseInt(pace[0]) * 60) + parseInt(pace[1]) + (parseInt(pace[2]) / 1000)
  const timeInSeconds: number = distance * paceInSeconds
  const hours: any = Math.floor(timeInSeconds / 3600).toString()
  const minutes: any = Math.floor((timeInSeconds % 3600) / 60).toString()
  const seconds: any = Math.floor(timeInSeconds % 60).toString()
  return [hours, minutes, seconds]
}
