import React, {useState} from 'react';
import {Form, InputNumber, Select, Button, Card} from 'antd';

const RunCalculator = () => {
  const initState = 0;
  const [hours, setHours] = useState(initState);
  const [minutes, setMinutes] = useState(initState);
  const [seconds, setSeconds] = useState(initState);
  const [distance, setDistance] = useState(1);
  const [pace, setPace] = useState(null);
  const distanceOptions = [
    {label: '1000 miters', value: 1},
    {label: '5000 miters', value: 5},
    {label: '10000 miters', value: 10},
    {label: 'Half marathon 21097 miters', value: 21.0975},
    {label: 'Marathon 42195 miters', value: 42.195},
    {label: '100 kilometers', value: 100},
  ];
  const [form]=Form.useForm();
  const handleHoursChange = (hoursValue) => {
    setHours(hoursValue);
  };
  const handleMinutesChange = (minutesValue) => {
    setMinutes(minutesValue);
  };
  const handleSecondsChange = (secondsValue) => {
    setSeconds(secondsValue);
  };
  const handleDistanceChange = (distanceValue) => {
    console.log(distanceValue);
    setDistance(distanceValue);
  };
  const handleFinish = () => {
    console.log('handleFinish');
    calculatePace();
  };
  const handleReset = () => {
    setPace(null);
    form.resetFields();
  };
  const calculatePace = () => {
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    const paceInSeconds = totalSeconds / parseInt(distance);
    const paceInMinutes = Math.floor(paceInSeconds / 60);
    const paceInMSeconds = Math.round(
        (paceInSeconds - paceInMinutes * 60) * 1000);
    setPace(`${paceInMinutes}'${paceInMSeconds}"`);
  };
  return (
    <>
      <Card title="RUN PACE CALCULATOR" bordered={true} style={{margin: 20}}>
        <Form
          form={form}
          onFinish={handleFinish}
          initialValues={{
            hours: 0,
            minutes: 0,
            seconds: 0,
            distance: null,
          }}
        >
          <Form.Item
            label='hours'
            name='hours'
          >
            <InputNumber
              min={0}
              max={59}
              value={hours}
              onChange={handleHoursChange}
            />
          </Form.Item>
          <Form.Item
            label='minutes'
            name='minutes'
          >
            <InputNumber
              min={0}
              max={59}
              value={minutes}
              onChange={handleMinutesChange}
            />
          </Form.Item>
          <Form.Item
            label='seconds'
            name='seconds'
          >
            <InputNumber
              min={0}
              max={59}
              value={seconds}
              onChange={handleSecondsChange}
            />
          </Form.Item>
          <Form.Item
            label='distance'
            name="distance"
          >
            <Select
              style={{
                width: '100%',
              }}
              placeholder='Choose your distance'
              onChange={handleDistanceChange}
              options={distanceOptions}
            >
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="secondary"
              htmlType="button"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
        {pace && <p>{`Your pace may be ${pace}`}</p>}
      </Card>
    </>
  );
};

export default RunCalculator;
