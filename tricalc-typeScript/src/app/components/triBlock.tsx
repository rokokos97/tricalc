import React, { useEffect, useState } from 'react'
import { Form, PickerView } from 'antd-mobile'
import { createArrayOfOptions } from '../utils/createArrayOfOptions'
import { calculateTriRaceTime } from '../utils/calculateTriRaceTime'
import { triDistanceOptions, initialState } from '../data/options'
import ButtonsBlock from './buttonsBlock'
import MessageArea from './resultMessageArea'
import type { IResult } from '../../interfaces'
import { type PickerValue } from 'antd-mobile/es/components/picker-view'

const TriBlock: React.FC = () => {
  const [swimPace, setSwimPace] = useState<string[]>(initialState)
  const [transitZone1, setTransitZone1] = useState<string[]>(initialState)
  const [bikeSpeed, setBikeSpeed] = useState<string[]>(initialState)
  const [transitZone2, setTransitZone2] = useState<string[]>(initialState)
  const [runPace, setRunPace] = useState<string[]>(initialState)
  const [distance, setDistance] = useState(null)
  const [result, setResult] = useState<null | IResult>(null)
  const [isCalculateDisabled, setIsCalculateDisabled] = useState<boolean>(true)
  const [form] = Form.useForm()
  const formStyle = {
    '--border-top': 'none',
    '--border-bottom': 'none',
    '--border-inner': 'none',
    paddingTop: '1.6rem'
  }
  const pickerView = {
    '--height': '12.2rem',
    '--item-height': '4rem',
    '--item-font-size': '2.4rem',
    width: '17.3rem'
  }
  const handleSwimPaceChange = (value: PickerValue[]): void => {
    setSwimPace(value.map((item) => String(item)).filter((item) => item !== 'null'))
  }
  const handleT1TimeChange = (value: PickerValue[]): void => { setTransitZone1(value.map((item) => String(item)).filter((item) => item !== 'null')) }
  const handleBikeSpeedChange = (value: PickerValue[]): void => { setBikeSpeed(value.map((item) => String(item)).filter((item) => item !== 'null')) }
  const handleT2TimeChange = (value: PickerValue[]): void => { setTransitZone2(value.map((item) => String(item)).filter((item) => item !== 'null')) }
  const handleRunPaceChange = (value: PickerValue[]): void => { setRunPace(value.map((item) => String(item)).filter((item) => item !== 'null')) }
  const handleDistanceChange = (value: any): void => { setDistance(value[0]) }
  const handleReset = (): void => {
    setIsCalculateDisabled(true)
    setResult(null)
    setDistance(null)
    setSwimPace(['0', '0'])
    setTransitZone1(['0', '0'])
    setBikeSpeed(['0'])
    setTransitZone2(['0', '0'])
    setRunPace(['0', '0'])
    form.resetFields()
  }
  useEffect(() => {
    if (
      (+swimPace[0] !== 0 || +swimPace[1] !== 0) &&
      (+transitZone1[0] !== 0 || +transitZone1[1] !== 0) &&
      (+bikeSpeed[0] !== 0) &&
      (+transitZone2[0] !== 0 || +transitZone2[1] !== 0) &&
      (+runPace[0] !== 0 || +runPace[1] !== 0)
    ) {
      setIsCalculateDisabled(false)
    }
  }, [swimPace, transitZone1, bikeSpeed, transitZone2, runPace])
  const handleSubmit = (): void => {
    setResult({
      tri: calculateTriRaceTime(
        distance,
        swimPace,
        transitZone1,
        bikeSpeed,
        transitZone2,
        runPace
      )
    }
    )
  }
  return (
    <>
      <Form
        style={formStyle}
        layout={'horizontal'}
        form={form}
      >
        <div className='center'>
          <Form.Item
            name='swimPace'
          >
            <div className='title'>Swimming pace</div>
            <PickerView
              className='pickerView'
              onChange={handleSwimPaceChange}
              columns={[createArrayOfOptions('\''), createArrayOfOptions('"')]}
              style={pickerView}
            />
          </Form.Item>
          <Form.Item
            name='t1'
          >
            <div className='title'>Transit zone 1</div>
            <PickerView
              onChange={handleT1TimeChange}
              columns={[createArrayOfOptions('\''), createArrayOfOptions('"')]}
              style={pickerView}
            />
          </Form.Item>
        </div>
        <div className='center'>
          <Form.Item
            name='bikeSpeed'
          >
            <div className='title'>Bike speed km/h</div>
            <PickerView
              onChange={handleBikeSpeedChange}
              columns={[createArrayOfOptions('', undefined, undefined, 51)]}
              style={pickerView}
            />
          </Form.Item>
          <Form.Item
            name='t2'
          >
            <div className='title'>Transit zone 2</div>
            <PickerView
              onChange={handleT2TimeChange}
              columns={[createArrayOfOptions('\''), createArrayOfOptions('"')]}
              style={pickerView}
            />
          </Form.Item>
        </div>
        <div className='center'>
          <Form.Item
            name='runPace'
          >
            <div className='title'>Running pace</div>
            <div className='center'>
              <PickerView
                onChange={handleRunPaceChange}
                columns={[createArrayOfOptions('\''), createArrayOfOptions('"')]}
                style={pickerView}
              />
            </div>
          </Form.Item>
          <Form.Item
            name='distance'
          >
            <div className='title'>
              {
                'Distance km '
              }
            </div>
            <div className='center'>
              <PickerView
                columns={triDistanceOptions}
                onChange={handleDistanceChange}
                style={pickerView}
              />
            </div>
          </Form.Item>
        </div>
        {(result != null) && <MessageArea result={result}/>}
      </Form>
      <ButtonsBlock
        onReset={handleReset}
        onSubmit={handleSubmit}
        isCalculateDisabled={isCalculateDisabled}/>
    </>
  )
}
export default TriBlock
