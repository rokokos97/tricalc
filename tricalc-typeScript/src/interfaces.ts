export interface IItem {
  label: string
  value: string
}
export interface IDistance {
  name: string
  swim: number
  bike: number
  run: number
}
export interface ITabs {
  title: string
  key: string
  component: JSX.Element
}
export interface IResult {
  tri?: string[]
  pace?: string[]
  time?: string[]
}

export interface IButtonsBlockProps {
  onReset: () => void
  onSubmit: () => void
  isCalculateDisabled: boolean
}

export interface IResultMessageAreaProps {
  isTime?: boolean
  isPace?: boolean
  result: IResult
}
