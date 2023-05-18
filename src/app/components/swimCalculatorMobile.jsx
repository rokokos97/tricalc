import React, {useState, useEffect} from 'react';
import {Form, Button, PickerView, AutoCenter} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {runPaceCalculator} from '../utils/runPaceCalculator';
import {valueArr} from '../utils/valueArr';
import NavBar from './navBar';

const RunCalculatorMobile = () => {
  const initState = 0;
  const [hours, setHours] = useState(initState);
  const [minutes, setMinutes] = useState(initState);
  const [seconds, setSeconds] = useState(initState);
  const [distance, setDistance] = useState(null);
  const [pace, setPace] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [form] = useForm();
  const handleChange = (value) => {
    setHours(value[0]);
    setMinutes(value[1]);
    setSeconds(value[2]);
  };
  const handleSubmit = () => {
    setPace(runPaceCalculator(hours, minutes, seconds, distance/100));
  };
  const handleReset = () => {
    setPace(null);
    setIsDisabled(false);
    setDistance(null);
    setHours(0);
    setMinutes(0);
    setHours(0);
    form.resetFields();
  };

  useEffect(() => {
    if (distance) {
      setIsDisabled(true);
    }
  }, [distance]);
  return (
    <>
      <AutoCenter>
        <div style={{margin: '20px'}}>
          <AutoCenter>
            <NavBar/>
          </AutoCenter>
        </div>
        <Form
          layout={'horizontal'}
          form={form}
          initialValues={
            {
              time: ['0', '0', '0'],
              distance: 'choose your race distance',
            }
          }
          footer={<>
            <Button
              color="primary"
              type="button"
              style={{width: '100%', marginBottom: '10px'}}
              size={'large'}
              disabled={!isDisabled}
              onClick={handleSubmit}>
              Submit
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
            label={<AutoCenter><h2>set your finish time hh:mm:ss</h2></AutoCenter>}
            layout={'vertical'}
          >
            <PickerView
              onChange={handleChange}
              columns={[valueArr(1), valueArr(1), valueArr(1)]}
              style={{'--height': '50px', '--item-height': '3rem', 'width': '100%'}}
            />
          </Form.Item>
          <Form.Item
            name='distance'
            layout={'vertical'}
          >
            <PickerView
              columns={[valueArr(100, 2)]}
              onChange={(value) => {
                setDistance(Number(value[0]));
              }}
              style={{'--height': '100px', '--item-height': '1rem'}}
            />
          </Form.Item>
          <h2 style={{textAlign: 'center'}}>{pace && <p>{`Your pace may be ${pace}`}</p>}</h2>
        </Form>
      </AutoCenter>
    </>
  );
};

export default RunCalculatorMobile;
