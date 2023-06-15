import { type IItem } from '../../interfaces'
export function createArrayOfOptions (label: string, step: number | undefined = 1, start: number | undefined = 0, end: number | undefined = 60): IItem[] {
  const valueArr: IItem[] = []
  for (let i = start; i < end * step; i += step) {
    valueArr.push({ label: `${i}${label}`, value: `${i}` })
  }
  return valueArr
}
