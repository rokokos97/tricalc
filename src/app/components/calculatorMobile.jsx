import React, {useState, useEffect} from 'react';
import {Form, PickerView} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {paceCalculator} from '../utils/paceCalculator';
import {valueArr} from '../utils/valueArr';
import {runDistanceColumn} from '../data/runDistance';
import {runDistanceTimeCalculate} from '../utils/runDistanceTimeCalculate';
import PropTypes from 'prop-types';
import ResetConfirmButtonBlock from './resetConfirmButtonBlock';
const CalculatorMobile = ({sport}) => {
  const initialState = [0, 0, 0];
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(initialState);
  const [pace, setPace] = useState(initialState);
  const [isCalculateDisabled, setIsCalculateDisabled] = useState(true);
  const [isPaceDisabled, setIsPaceDisabled] = useState(false);
  const [isTimeDisabled, setIsTimeDisabled] = useState(false);
  const [form] = useForm();
  const handleTimeChange = (value) => setTime(value);
  const handlePaceChange = (value) => setPace(value);
  const handleSubmit = () => {
    if (isPaceDisabled) {
      setPace(paceCalculator(sport?distance/100:distance, time));
    } else {
      setIsTimeDisabled(false);
      setTime(runDistanceTimeCalculate(sport?distance/100:distance, pace));
      setIsTimeDisabled(true);
    }
  };
  const handleReset = () => {
    setIsPaceDisabled(false);
    setIsTimeDisabled(false);
    setIsCalculateDisabled(true);
    form.resetFields();
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
        style={{'--border-top': 'none', '--border-bottom': 'none', '--border-inner': 'none'}}
        footer={
          <ResetConfirmButtonBlock
            onReset={handleReset}
            onSubmit={handleSubmit}
            isCalculateDisabled={isCalculateDisabled}/>
        }
      >
        <Form.Item
          disabled={isTimeDisabled}
        >
          <div className='title'>race time</div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'nowrap'}}>
            <PickerView
              value={time}
              onChange={handleTimeChange}
              columns={[valueArr(1), valueArr(1, '\''), valueArr(1, '\"')]}
              style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '2rem', 'width': '100%'}}
            />
          </div>
        </Form.Item>
        <Form.Item
          name='distance'
        >
          <span className='title'>distance</span>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {sport?
              <PickerView
                columns={[valueArr(100, ' m')]}
                defaultValue={[[{label: '100 m', value: '100'}]]}
                onChange={(value) => {
                  setDistance(Number(value[0]));
                }}
                style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '1.5rem', 'width': '100%'}}
              />:
              <PickerView
                columns={runDistanceColumn}
                defaultValue={[{label: '1000 meters', value: '1'}]}
                onChange={(value) => {
                  setDistance(Number(value[0]));
                }}
                style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '1.5rem', 'width': '100%'}}
              />
            }
          </div>

        </Form.Item>
        <Form.Item
          disabled={isPaceDisabled}
        >
          <span className='title'>your pace</span>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PickerView
              value={pace}
              onChange={handlePaceChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"'), valueArr(1)]}
              style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '2rem', 'width': '100%'}}
            />
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
CalculatorMobile.propTypes = {
  sport: PropTypes.string,
};

export default CalculatorMobile;
