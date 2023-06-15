import React from 'react'
import type { IResultMessageAreaProps } from '../../interfaces'

const ResultMessageArea: React.FC<IResultMessageAreaProps> = ({ result }) => {
  const showPaceResult = (pace: string[]): string => {
    if (pace[0] === '0') {
      return `Your pace may be ${pace[1]}':${pace[2]}".${pace[3]}`
    }
    return `Your pace may be ${pace[0]}:${pace[1]}':${pace[2]}"`
  }
  return (
    <div style={{
      margin: '0 0.5rem',
      background: 'rgba(0, 181, 120, 0.3)',
      borderRadius: '0.4rem',
      textAlign: 'center',
      padding: '1rem'
    }}>
      <div>
        {result.time !== undefined &&
          `Your time may be ${String(result.time[0])}:${String(result.time[1])}':${String(result.time[2])}"`
        }
      </div>
      <div>
        {result.pace !== undefined && showPaceResult(result.pace) }
      </div>
      <div>
        { result.tri !== undefined &&
            `Your time may be ${result.tri[0]}:${result.tri[1]}':${result.tri[2]}"`}
      </div>
      <div>Well Done!</div>
    </div>
  )
}
export default ResultMessageArea
