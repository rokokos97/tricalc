import React, {useState, useEffect} from 'react';
import {Form, Button, PickerView} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {paceCalculator} from '../utils/paceCalculator';
import {valueArr} from '../utils/valueArr';
import {runDistanceColumn} from '../data/runDistance';
import {runDistanceTimeCalculate} from '../utils/runDistanceTimeCalculate';

const RunCalculatorMobile = () => {
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [pace, setPace] = useState();
  const [isCalculateDisabled, setIsCalculateDisabled] = useState(true);
  const [isPaceDisabled, setIsPaceDisabled] = useState(false);
  const [isTimeDisabled, setIsTimeDisabled] = useState(false);
  const [form] = useForm();
  const handleTimeChange = (value) => {
    setTime(value);
  };
  const handlePaceChange = (value) => {
    setPace(value);
  };
  const handleSubmit = () => {
    if (isPaceDisabled) {
      console.log(paceCalculator(time, distance));
      setPace(paceCalculator(time, distance));
    } else {
      setIsTimeDisabled(false);
      setTime(runDistanceTimeCalculate(distance, pace));
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
    if (time !== undefined && (+time[0]>0 || +time[1]>0 || +time[2]>0)) {
      setIsPaceDisabled(true);
      setIsCalculateDisabled(false);
    }
  }, [time]);
  useEffect(() => {
    if (pace !== undefined && (+pace[0]>0 || +pace[1]>0 || +pace[2]>0)) {
      console.log(pace);
      setIsTimeDisabled(true);
      setIsCalculateDisabled(false);
    }
  }, [pace]);
  return (
    <>
      <Form
        form={form}
        style={{'--border-top': 'none', '--border-bottom': 'none', '--border-inner': 'none'}}
        footer={<>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Button
              style={{width: '100%', margin: '10px'}}
              fill='outline'
              size='large'
              color="primary"
              type="button"
              onClick={handleReset}
            >
            Reset
            </Button>
            <Button
              color="primary"
              type="button"
              style={{width: '100%', margin: '10px'}}
              size={'large'}
              disabled={isCalculateDisabled}
              onClick={handleSubmit}>
            Calculate
            </Button>
          </div>
        </>
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
            <PickerView
              columns={runDistanceColumn}
              onChange={(value) => {
                setDistance(Number(value[0]));
              }}
              style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '1.5rem', 'width': '100%'}}
            />
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

export default RunCalculatorMobile;
