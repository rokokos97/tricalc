import React, {useState} from 'react';
import {Button, Card, Form, InputNumber} from 'antd';
const SwimCalculator = () => {
  const initState = 0;
  const [hours, setHours] = useState(initState);
  const [minutes, setMinutes] = useState(initState);
  const [seconds, setSeconds] = useState(initState);
  const [distance, setDistance] = useState(initState);
  const [pace, setPace] = useState(null);
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
            <InputNumber
              min={100}
              max={10000}
              value={distance}
              onChange={handleDistanceChange}
            />
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

export default SwimCalculator;
