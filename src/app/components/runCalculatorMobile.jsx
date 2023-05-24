import React, {useState, useEffect} from 'react';
import {Form, Button, PickerView, AutoCenter} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {runPaceCalculator} from '../utils/runPaceCalculator';
import {valueArr} from '../utils/valueArr';
import {runDistanceColumn} from '../data/runDistance';

const RunCalculatorMobile = () => {
  const [time, setTime] = useState([0, 0, 0]);
  const [distance, setDistance] = useState();
  const [pace, setPace] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [form] = useForm();
  const handleChange = (value) => {
    setTime(value);
  };
  const handleSubmit = () => {
    setPace(runPaceCalculator(time, distance));
  };
  const handleReset = () => {
    setPace([0, 0, 0]);
    setIsDisabled(true);
    setDistance(null);
    setTime([0, 0, 0]);
    form.resetFields();
  };
  useEffect(() => {
    setIsDisabled(false);
  }, [distance]);
  return (
    <>
      <Form
        form={form}
        layout={'horizontal'}
        style={{'--border-top': 'none', '--border-bottom': 'none', '--border-inner': 'none'}}
        footer={<>
          <Button
            color="primary"
            type="button"
            style={{width: '100%', marginBottom: '10px'}}
            size={'large'}
            disabled={isDisabled}
            onClick={handleSubmit}>
            Calculate
          </Button>
          <Button
            style={{width: '100%', marginBottom: '10px'}}
            size='large'
            color="primary"
            type="button"
            onClick={handleReset}
          >
            Reset
          </Button>
        </>
        }
      >
        <Form.Item
          name='time'
          label={
            <AutoCenter>
              <div>race time</div>
              <div style={{'textAlign': 'center'}}>{'hh  :  mm  :  ss'}</div>
            </AutoCenter>
          }
          layout={'vertical'}
        >
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PickerView
              onChange={handleChange}
              columns={[valueArr(1), valueArr(1), valueArr(1)]}
              style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '2rem', 'width': '100%'}}
            />
          </div>
        </Form.Item>
        <Form.Item
          name='distance'
          label={
            <AutoCenter>
              <div>race distance</div>
            </AutoCenter>
          }
          layout={'vertical'}
        >
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
          style={{}}
          name='runPace'
          label={
            <AutoCenter>
              <div>your pace</div>
              <div style={{'textAlign': 'center'}}>{'mm  :  ss  :  ms'}</div>
            </AutoCenter>
          }
          layout={'vertical'}
        >
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PickerView
              value={pace}
              columns={[valueArr(1), valueArr(1), valueArr(1)]}
              style={{'--height': '100px', '--item-height': '2.2rem', '--item-font-size': '2rem', 'width': '100%'}}
            />
          </div>
        </Form.Item>
        {/* {pace && <p style={{'textAlign': 'center'}}>{`Your pace may be ${pace}`}</p>} */}
      </Form>
    </>
  );
};

export default RunCalculatorMobile;
