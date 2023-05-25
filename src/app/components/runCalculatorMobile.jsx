import React, {useState, useEffect} from 'react';
import {Form, Button, PickerView} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {runPaceCalculator} from '../utils/runPaceCalculator';
import {valueArr} from '../utils/valueArr';
import {runDistanceColumn} from '../data/runDistance';

const RunCalculatorMobile = () => {
  const [distance, setDistance] = useState();
  const [time, setTime] = useState();
  const [pace, setPace] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  const [form] = useForm();
  const handleChange = (value) => {
    setTime(value);
  };
  const handleSubmit = () => {
    setPace(runPaceCalculator(time, distance));
  };
  const handleReset = () => {
    setIsDisabled(false);
    form.resetFields();
    form.setFieldValue(['time'], [1, 1, 1]);
  };
  useEffect(() => {
    setIsDisabled(false);
  }, [distance]);
  return (
    <>
      <Form
        form={form}
        name = 'time'
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
              disabled={isDisabled}
              onClick={handleSubmit}>
            Calculate
            </Button>
          </div>
        </>
        }
      >
        <Form.Item
        >
          <div className='title'>race time</div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'nowrap'}}>
            <PickerView
              onChange={handleChange}
              columns={[valueArr(1), valueArr(1, '\''), valueArr(1, '\"')]}
              style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '2rem', 'width': '100%'}}
            />
          </div>
        </Form.Item>
        <Form.Item
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
          disabled={isDisabled}
        >
          <span className='title'>your pace</span>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PickerView
              value={pace}
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
