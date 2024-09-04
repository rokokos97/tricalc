import React, { useState, useEffect } from 'react'
import { Form, PickerView } from 'antd-mobile'
import { paceCalculate } from '../utils/paceCalculate'
import { createArrayOfOptions } from '../utils/createArrayOfOptions'
import { runDistanceColumn, initialState } from '../data/options'
import { timeCalculate } from '../utils/timeCalculate'
import ButtonsBlock from './buttonsBlock'
import MessageArea from './resultMessageArea'
import type {IResult, IStyle} from '../../interfaces'
import type { PickerValue } from 'antd-mobile/es/components/picker-view'
const RunBlock = ():JSX.Element => {
  const [distance, setDistance] = useState<number>(1)
  const [time, setTime] = useState<string[] | undefined>(initialState)
  const [pace, setPace] = useState<string[] | undefined>(initialState)
  const [isCalculateDisabled, setIsCalculateDisabled] = useState<boolean>(true)
  const [isPaceDisabled, setIsPaceDisabled] = useState<boolean>(false)
  const [isTimeDisabled, setIsTimeDisabled] = useState<boolean>(false)
  const [result, setResult] = useState<null | IResult>()
  const formStyle: IStyle = {
    '--border-top': 'none',
    '--border-bottom': 'none',
    '--border-inner': 'none',
    paddingTop: '1.6rem'
  }
  const pickerViewStyle: IStyle = {
    '--height': '11rem',
    '--item-height': '4rem',
    '--item-font-size': '2.4rem',
    width: '100%'
  }
  const [form] = Form.useForm()
  const handleTimeChange = (value: PickerValue[]): void => {
    setTime(value.map((item) => String(item)).filter((item) => item !== 'null'))
  }
  const handlePaceChange = (value: PickerValue[]): void => {
    setPace(value.map((item) => String(item)).filter((item) => item !== 'null'))
  }
  // const handleTimeChange = (value: string[]): void => { setTime(value) }
  // const handlePaceChange = (value: string[]): void => { setPace(value) }
  const handleSubmit = (): void => {
    if (isPaceDisabled) {
      const result: string[] = paceCalculate(distance, time)
      setPace(result)
      setResult({ pace: result })
    } else {
      const result: string[] = timeCalculate(distance, pace)
      setIsTimeDisabled(false)
      setTime(result)
      setResult({ time: result })
      setIsTimeDisabled(true)
    }
  }
  const handleReset = (): void => {
    setIsPaceDisabled(false)
    setIsTimeDisabled(false)
    setIsCalculateDisabled(true)
    setResult(null)
    form.resetFields(['distance'])
    setTime(['0', '0', '0'])
    setPace(['0', '0', '0'])
  }
  useEffect(() => {
    if (time !== undefined && (+time[0] !== 0 || +time[1] !== 0 || +time[2] !== 0)) {
      setIsPaceDisabled(true)
      setIsCalculateDisabled(false)
    }
  }, [time])
  useEffect(() => {
    if (pace !== undefined && (+pace[0] !== 0 || +pace[1] !== 0 || +pace[2] !== 0)) {
      setIsTimeDisabled(true)
      setIsCalculateDisabled(false)
    }
  }, [pace])
  return (
        <>
            <Form
                form={form}
                style={formStyle}
            >
                <Form.Item
                    disabled={isTimeDisabled}
                >
                    <div className='title'>Race time</div>
                    <div className='center'>
                        <PickerView
                            value={time}
                            onChange={handleTimeChange}
                            columns={[createArrayOfOptions(
                              '',
                              undefined,
                              undefined,
                              31
                            ), createArrayOfOptions('\''), createArrayOfOptions('"')]}
                            style={pickerViewStyle}
                        />
                    </div>
                </Form.Item>
                <Form.Item
                    name='distance'
                >
                    <div className='title'>Distance</div>
                    <div className='center'>
                        <PickerView
                                columns={runDistanceColumn}
                                onChange={(value) => {
                                  setDistance(Number(value[0]))
                                }}
                                style={pickerViewStyle}
                            />
                    </div>
                </Form.Item>
                <Form.Item
                    disabled={isPaceDisabled}
                >
                    <div className='title'>Your pace</div>
                    <div className='center'>
                        <PickerView
                            value={pace}
                            onChange={handlePaceChange}
                            columns={[createArrayOfOptions('\''), createArrayOfOptions('"'), createArrayOfOptions('')]}
                            style={pickerViewStyle}
                        />
                    </div>
                </Form.Item>
                {(result != null) && <MessageArea isTime={isTimeDisabled} isPace={isPaceDisabled} result={result}/>}
                <ButtonsBlock
                    onReset={handleReset}
                    onSubmit={handleSubmit}
                    isCalculateDisabled={isCalculateDisabled}/>
            </Form>
        </>
  )
}
export default RunBlock
