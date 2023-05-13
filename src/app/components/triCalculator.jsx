import React, {useState} from 'react';
import {Form, InputNumber, Select, Button, Card} from 'antd';

const TriCalculator = () => {
  const initState = 0;
  const [distance, setDistance] = useState(1);
  const distanceOptions = [
    {label: 'Sprint', value: 'sprint'},
    {label: 'Olympic', value: 'olympic'},
    {label: 'Half Ironman 70.3', value: 'ironman70'},
    {label: 'Ironman 140.7', value: 'ironman140'},
    {label: 'Kyivman 410 km', value: 'kyivman'},
  ];
  const distanceArr = [
    {name: 'sprint', swim: 7.5, bike: 20, run: 5},
    {name: 'olympic', swim: 15, bike: 40, run: 10},
    {name: 'ironman70', swim: 19, bike: 90, run: 21.097},
    {name: 'ironman140', swim: 38, bike: 180, run: 42.195},
    {name: 'sprint', swim: 80, bike: 350, run: 52},
  ];
  const [secondsSwim, setSecondsSwim] = useState(initState);
  const [minutesSwim, setMinutesSwim] = useState(initState);

  const [secondsT1, setSecondsT1] = useState(initState);
  const [minutesT1, setMinutesT1] = useState(initState);

  const [bikeSpeed, setBikeSpeed] = useState(initState);

  const [secondsT2, setSecondsT2] = useState(initState);
  const [minutesT2, setMinutesT2] = useState(initState);

  const [secondsRun, setSecondsRun] = useState(initState);
  const [minutesRun, setMinutesRun] = useState(initState);

  const [raceTime, setRaceTime] = useState(null);
  const [form]=Form.useForm();
  const handleDistanceChange = (distanceValue) => {
    console.log(distanceValue);
    setDistance(distanceValue);
  };
  const handleSecondsSwimChange = (secondsValue) => {
    setSecondsSwim(secondsValue);
  };
  const handleMinutesSwimChange = (minutesValue) => {
    setMinutesSwim(minutesValue);
  };
  const handleSecondsT1Change = (secondsValue) => {
    setSecondsT1(secondsValue);
  };
  const handleMinutesT1Change = (minutesValue) => {
    setMinutesT1(minutesValue);
  };
  const handleBikeSpeedChange = (bikeSpeedValue) => {
    setBikeSpeed(bikeSpeedValue);
  };
  const handleSecondsT2Change = (secondsValue) => {
    setSecondsT2(secondsValue);
  };
  const handleMinutesT2Change = (minutesValue) => {
    setMinutesT2(minutesValue);
  };
  const handleSecondsRunChange = (secondsValue) => {
    setSecondsRun(secondsValue);
  };
  const handleMinutesRunChange = (minutesValue) => {
    setMinutesRun(minutesValue);
  };
  const handleFinish = () => {
    calculateRaceTime(distance, distanceArr);
  };
  const handleReset = () => {
    setRaceTime(null);
    form.resetFields();
  };
  const calculateRaceTime = (distance, options) => {
    const index = options.findIndex((item) => item.name === distance);
    const currentDistance = options[index];
    console.log(currentDistance);
    const swimTime = (parseInt(minutesSwim) * 60 + parseInt(secondsSwim))*currentDistance.swim;
    const t1Time = parseInt(minutesT1) * 60 + parseInt(secondsT1);
    const bikeTime = currentDistance.bike / bikeSpeed * 3600;
    const t2Time = parseInt(minutesT2) * 60 + parseInt(secondsT2);
    const runTime = parseInt(minutesRun) * 60 + parseInt(secondsRun)*currentDistance.run;

    const totalTime = swimTime + t1Time + bikeTime + t2Time + runTime;

    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = (totalTime % 60).toFixed();

    setRaceTime(`${hours}:${minutes.toString().padStart(2, '0')}':${seconds.toString().padStart(2, '0')}"`);
  };
  return (
    <>
      <Card
        title="TRIATHLON RACE TIME CALCULATOR"
        bordered={true}
        style={{margin: 20}}
      >
        <Form
          form={form}
          onFinish={handleFinish}
          initialValues={{
            distance: null,
            swimMin: 0,
            swimSec: 0,
            t1Min: 0,
            t1Sec: 0,
            bikeSpeed: 10,
            t2Min: 0,
            t2Sec: 0,
            runSec: 0,
            runMin: 0,
          }}
        >
          <Form.Item
            label='distance'
            name="distance"
          >
            <Select
              placeholder='Choose your distance'
              onChange={handleDistanceChange}
              options={distanceOptions}
            >
            </Select>
          </Form.Item>
          <Form.Item
            label='swim pace per 100m'
            name='swimMin'
          >
            <InputNumber
              min={0}
              max={59}
              value={minutesSwim}
              onChange={handleMinutesSwimChange}
            />
          </Form.Item>
          <Form.Item
            label=" "
            name='swimSec'
          >
            <InputNumber
              min={0}
              max={59}
              value={secondsSwim}
              onChange={handleSecondsSwimChange}
            />
          </Form.Item>
          <Form.Item
            label='Transit zone 1'
            name='t1Min'
          >
            <InputNumber
              min={0}
              max={59}
              value={minutesT1}
              onChange={handleMinutesT1Change}
            />
          </Form.Item>
          <Form.Item
            label=' '
            name='t1Sec'
          >
            <InputNumber
              min={0}
              max={59}
              value={secondsT1}
              onChange={handleSecondsT1Change}
            />
          </Form.Item>
          <Form.Item
            label='Bike speed km per hour'
            name='bikeSpeed'
          >
            <InputNumber
              min={10}
              max={50}
              value={bikeSpeed}
              onChange={handleBikeSpeedChange}
            />
          </Form.Item>
          <Form.Item
            label='Transit zone 2'
            name='t2Min'
          >
            <InputNumber
              min={0}
              max={59}
              value={minutesT2}
              onChange={handleMinutesT2Change}
            />
          </Form.Item>
          <Form.Item
            label=' '
            name='t2Sec'>
            <InputNumber
              min={0}
              max={59}
              value={secondsT2}
              onChange={handleSecondsT2Change}
            />
          </Form.Item>
          <Form.Item
            label='Run pace per 1km'
            name='runSec'
          >
            <InputNumber
              min={0}
              max={59}
              value={minutesRun}
              onChange={handleMinutesRunChange}
            />
          </Form.Item>
          <Form.Item
            label=' '
            name='runMin'>
            <InputNumber
              min={0}
              max={59}
              value={secondsRun}
              onChange={handleSecondsRunChange}
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
        {raceTime && <p>{`Your race time may be ${raceTime}`}</p>}
      </Card>
    </>
  );
};

export default TriCalculator;
