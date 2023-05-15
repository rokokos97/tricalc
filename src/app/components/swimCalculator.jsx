import React, {useState} from 'react';
import {Button, Card, Form, InputNumber} from 'antd';
import NavBar from './navBar';
const SwimCalculator = () => {
  const initState = 0;
  const [hours, setHours] = useState(initState);
  const [minutes, setMinutes] = useState(initState);
  const [seconds, setSeconds] = useState(initState);
  const [distance, setDistance] = useState(100);
  const [pace, setPace] = useState(null);
  const [form]=Form.useForm();
  const handleHoursChange = (hoursValue) => {
    if (hoursValue===null) {
      setHours(0);
    } else {
      setHours(hoursValue);
    }
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
    calculatePace(distance, hours, minutes, seconds);
  };
  const handleReset = () => {
    setPace(null);
    form.resetFields();
  };

  function calculatePace(distance, hours, minutes, seconds) {
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    const pacePer100m = totalSeconds / (distance/100);
    const minutesPer100m = Math.floor(pacePer100m / 60);
    const secondsPer100m = Math.floor(pacePer100m % 60);
    setPace( `${minutesPer100m}':${secondsPer100m}" per 100m`);
  }
  return (
    <>
      <Card title={<NavBar/>} bordered={true} style={{margin: 20, textAlign: 'center'}}>
        <h3>SWIM PACE CALCULATOR</h3>
        <Form
          style={{textAlign: 'left'}}
          form={form}
          onFinish={handleFinish}
          initialValues={{
            hours: 0,
            minutes: 0,
            seconds: 0,
            distance: 100,
          }}
        >
          <Form.Item
            name='hours'
          >
            <InputNumber
              addonBefore={'hours'}
              min={0}
              max={59}
              value={hours}
              onChange={handleHoursChange}
            />
          </Form.Item>
          <Form.Item
            name='minutes'
          >
            <InputNumber
              addonBefore={'minutes'}
              min={0}
              max={59}
              value={minutes}
              onChange={handleMinutesChange}
            />
          </Form.Item>
          <Form.Item
            name='seconds'
          >
            <InputNumber
              addonBefore={'seconds'}
              min={0}
              max={59}
              value={seconds}
              onChange={handleSecondsChange}
            />
          </Form.Item>
          <Form.Item
            name='distance'
          >
            <InputNumber
              addonBefore={'distance in miters'}
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
