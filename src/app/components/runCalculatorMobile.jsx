import React, {useState, useEffect} from 'react';
import {Form, Button, PickerView} from 'antd-mobile';
import {useForm} from 'antd/lib/form/Form';
import {runPaceCalculator} from '../utils/runPaceCalculator';
import {valueArr} from '../utils/valueArr';

const RunCalculatorMobile = () => {
  const initState = 0;
  const [hours, setHours] = useState(initState);
  const [minutes, setMinutes] = useState(initState);
  const [seconds, setSeconds] = useState(initState);
  const [distance, setDistance] = useState(null);
  const [pace, setPace] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [form] = useForm();
  const basicColumns = [[
    {label: 'choose your race', value: 'choose your race'},
    {label: '1000 miters', value: '1'},
    {label: '5000 miters', value: '5'},
    {label: '10000 miters', value: '10'},
    {label: 'Half marathon 21097 miters', value: '21.0975'},
    {label: 'Marathon 42195 miters', value: '42.195'},
    {label: '100 kilometers', value: '100'},
  ]];
  const handleChange = (value) => {
    setHours(value[0]);
    setMinutes(value[1]);
    setSeconds(value[2]);
  };
  const handleSubmit = () => {
    setPace(runPaceCalculator(hours, minutes, seconds, distance));
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
      <Form
        layout={'horizontal'}
        form={form}
        initialValues={
          {
            time: ['0', '0', '0'],
            distance: 'choose your race',
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
          label={'Run time'}
          layout={'vertical'}
        >
          <PickerView
            onChange={handleChange}
            columns={[valueArr(), valueArr(), valueArr()]}
            style={{'--height': '50px', '--item-height': '3rem', 'width': '100%'}}
          />
        </Form.Item>
        <Form.Item
          name='distance'
          layout={'vertical'}
        >
          <PickerView
            columns={basicColumns}
            onChange={(value) => {
              setDistance(Number(value[0]));
            }}
            style={{'--height': '100px', '--item-height': '1rem'}}
          />
        </Form.Item>
        <h2>{pace && <p>{`Your pace may be ${pace}`}</p>}</h2>
      </Form>
    </>
  );
};

export default RunCalculatorMobile;
