import type { IDistance, IItem } from '../../interfaces'

export const runDistanceColumn: IItem[][] = [[
  { label: '1000 meters', value: '1' },
  { label: '5000 meters', value: '5' },
  { label: '10000 meters', value: '10' },
  { label: 'Half marathon 21097 meters', value: '21.0975' },
  { label: 'Marathon 42195 meters', value: '42.195' },
  { label: '100 kilometers', value: '100' }
]]

export const triDistanceOptions: IItem[][] = [[
  { label: 'Sprint', value: 'sprint' },
  { label: 'Olympic', value: 'olympic' },
  { label: 'Half Ironman', value: 'ironman70' },
  { label: 'Ironman', value: 'ironman140' },
  { label: 'Kyivman', value: 'kyivman' }
]]
export const distanceArr: IDistance[] = [
  { name: 'sprint', swim: 7.5, bike: 20, run: 5 },
  { name: 'olympic', swim: 15, bike: 40, run: 10 },
  { name: 'ironman70', swim: 19, bike: 90, run: 21.097 },
  { name: 'ironman140', swim: 38, bike: 180, run: 42.195 },
  { name: 'sprint', swim: 80, bike: 350, run: 52 }
]

export const initialState: string[] = ['0', '0', '0']
