import React, {useState, useEffect} from 'react';
import {Form, PickerView} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {paceCalculator} from '../utils/paceCalculator';
import {createArr} from '../utils/createArr';
import {runDistanceColumn} from '../data/runDistance';
import {timeCalculate} from '../utils/timeCalculate';
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
  const formStyle = {
    '--border-top': 'none',
    '--border-bottom': 'none',
    '--border-inner': 'none',
    'paddingTop': '1.6rem',
  };
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
      setResult({pace: result});
    } else {
      const result = timeCalculate(sport?distance/100:distance, pace);
      setIsTimeDisabled(false);
      setTime(result);
      setResult({time: result});
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
              columns={[createArr(undefined, undefined, undefined, 31), createArr( '\''), createArr( '\"')]}
              style={pickerViewStyle}
            />
          </div>
        </Form.Item>
        <Form.Item
          name='distance'
        >
          <div className='title'>Distance</div>
          <div className='center'>
            {sport?
              <PickerView
                columns={[createArr( ' m', 100, 100, 51)]}
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
          <div className='center'>
            <PickerView
              value={pace}
              onChange={handlePaceChange}
              columns={[createArr('\''), createArr( '\"'), createArr()]}
              style={pickerViewStyle}
            />
          </div>
        </Form.Item>
        {result && <MessageArea isTime={isTimeDisabled} isPace={isPaceDisabled} result={result}/>}
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
