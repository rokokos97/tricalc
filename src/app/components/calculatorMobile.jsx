import React, {useState, useEffect} from 'react';
import {Form, PickerView} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {paceCalculator} from '../utils/paceCalculator';
import {valueArr} from '../utils/valueArr';
import {runDistanceColumn} from '../data/runDistance';
import {runDistanceTimeCalculate} from '../utils/runDistanceTimeCalculate';
import PropTypes from 'prop-types';
import ResetConfirmButtonBlock from './resetConfirmButtonBlock';
import MessageArea from './messageArea';
const CalculatorMobile = ({sport}) => {
  const initialState = [0, 0, 0];
  const [distance, setDistance] = useState(1);
  const [time, setTime] = useState(initialState);
  const [pace, setPace] = useState(initialState);
  const [isCalculateDisabled, setIsCalculateDisabled] = useState(true);
  const [isPaceDisabled, setIsPaceDisabled] = useState(false);
  const [isTimeDisabled, setIsTimeDisabled] = useState(false);
  const [result, setResult] = useState(null);
  const pickerViewStyle = {
    '--height': '11rem',
    '--item-height': '4rem',
    '--item-font-size': '2.4rem',
    'width': '100%',
  };
  const [form] = useForm();
  const handleTimeChange = (value) => setTime(value);
  const handlePaceChange = (value) => setPace(value);
  const handleSubmit = () => {
    if (isPaceDisabled) {
      const result = paceCalculator(sport?distance/100:distance, time);
      setPace(result);
      setResult(`${result[0]}' : ${result[1]}"`);
    } else {
      const result = runDistanceTimeCalculate(sport?distance/100:distance, pace);
      setIsTimeDisabled(false);
      setTime(result);
      setResult(`${result[0]} : ${result[1]}' : ${result[2]}"`);
      setIsTimeDisabled(true);
    }
  };
  const handleReset = () => {
    setIsPaceDisabled(false);
    setIsTimeDisabled(false);
    setIsCalculateDisabled(true);
    setResult(null);
    form.resetFields(['distance']);
    setTime([0, 0, 0]);
    setPace([0, 0, 0]);
  };
  useEffect(() => {
    if (time !== undefined && (+time[0]!==0 || +time[1]!==0 || +time[2]!==0)) {
      setIsPaceDisabled(true);
      setIsCalculateDisabled(false);
    }
  }, [time]);
  useEffect(() => {
    if (pace !== undefined && (+pace[0]!==0 || +pace[1]!==0 || +pace[2]!==0)) {
      setIsTimeDisabled(true);
      setIsCalculateDisabled(false);
    }
  }, [pace]);
  return (
    <>
      <Form
        form={form}
        style={{
          '--border-top': 'none',
          '--border-bottom': 'none',
          '--border-inner': 'none',
          'paddingTop': '1.6rem',
        }}
      >
        <Form.Item
          disabled={isTimeDisabled}
        >
          <div className='title'>Race time</div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'nowrap'}}>
            <PickerView
              value={time}
              onChange={handleTimeChange}
              columns={[valueArr(1), valueArr(1, '\''), valueArr(1, '\"')]}
              style={pickerViewStyle}
            />
          </div>
        </Form.Item>
        <Form.Item
          name='distance'
        >
          <div className='title'>Distance</div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {sport?
              <PickerView
                columns={[valueArr(100, ' m')]}
                defaultValue={[[{label: '100 m', value: '100'}]]}
                onChange={(value) => {
                  setDistance(Number(value[0]));
                }}
                style={pickerViewStyle}
              />:
              <PickerView
                columns={runDistanceColumn}
                defaultValue={[{label: '1000 meters', value: '1'}]}
                onChange={(value) => {
                  setDistance(Number(value[0]));
                }}
                style={pickerViewStyle}
              />
            }
          </div>

        </Form.Item>
        <Form.Item
          disabled={isPaceDisabled}
        >
          <div className='title'>Your pace</div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PickerView
              value={pace}
              onChange={handlePaceChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"'), valueArr(1)]}
              style={pickerViewStyle}
            />
          </div>
        </Form.Item>
        {result && <MessageArea result={result}/>}
        <ResetConfirmButtonBlock
          onReset={handleReset}
          onSubmit={handleSubmit}
          isCalculateDisabled={isCalculateDisabled}/>
      </Form>
    </>
  );
};
CalculatorMobile.propTypes = {
  sport: PropTypes.string,
};

export default CalculatorMobile;
