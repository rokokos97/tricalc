import React from 'react'
import { Button } from 'antd-mobile'
import {type IButtonsBlockProps, IStyle} from '../../interfaces'

const ButtonsBlock: React.FC<IButtonsBlockProps> = ({ onReset, onSubmit, isCalculateDisabled }):JSX.Element => {
  const buttonStyle:IStyle = { width: '50%', margin: '0.5rem', fontSize: '1.8rem' }
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          style={buttonStyle}
          fill='outline'
          size='large'
          color="primary"
          type="button"
          onClick={onReset}
        >
         Reset
        </Button>
        <Button
          color="primary"
          type="button"
          style={buttonStyle}
          size={'large'}
          disabled={isCalculateDisabled}
          onClick={onSubmit}>
         Calculate
        </Button>
      </div>
      <a className='center' href="mailto:lisovyi.rostyslav@gmail.com">Send your feedback</a>
    </>
  )
}
export default ButtonsBlock
