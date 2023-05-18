import React, {useState} from 'react';
import {AutoCenter, Button, Form, PickerView} from 'antd-mobile';
import {valueArr} from '../utils/valueArr';


const TriCalculatorDesktop = () => {
  const [swimPace, setSwimPace] = useState(['0', '0']);
  const [t1, setT1] = useState(['0', '0']);
  const [bikeSpeed, setBikeSpeed] = useState(['0']);
  const [t2, setT2] = useState(['0', '0']);
  const [runPace, setRunPace] = useState(['0', '0']);
  const [distance, setDistance] = useState(1);
  const [raceTime, setRaceTime] = useState(null);
  const distanceOptions = [[
    {label: 'Sprint', value: 'sprint'},
    {label: 'Olympic', value: 'olympic'},
    {label: 'Half Ironman 70.3', value: 'ironman70'},
    {label: 'Ironman 140.7', value: 'ironman140'},
    {label: 'Kyivman 410 km', value: 'kyivman'},
  ]];
  const distanceArr = [
    {name: 'sprint', swim: 7.5, bike: 20, run: 5},
    {name: 'olympic', swim: 15, bike: 40, run: 10},
    {name: 'ironman70', swim: 19, bike: 90, run: 21.097},
    {name: 'ironman140', swim: 38, bike: 180, run: 42.195},
    {name: 'sprint', swim: 80, bike: 350, run: 52},
  ];

  const handleSwimPaceChange = (value) => {
    setSwimPace(value);
  };
  const handleT1TimeChange = (value) => {
    setT1(value);
  };
  const handleBikeSpeedChange = (value) => {
    setBikeSpeed(value);
  };
  const handleT2TimeChange = (value) => {
    setT2(value);
  };
  const handleRunPaceChange = (value) => {
    setRunPace(value);
  };
  const calculateRaceTime = (distance, options) => {
    const index = options.findIndex((item) => item.name === distance);
    const currentDistance = options[index];
    const swimTime = (parseInt(swimPace[0]) * 60 + parseInt(swimPace[1]))*currentDistance.swim;
    const t1Time = parseInt(t1[0]) * 60 + parseInt(t1[1]);
    const bikeTime = currentDistance.bike / bikeSpeed * 3600;
    const t2Time = parseInt(t2[0]) * 60 + parseInt(t2[1]);
    const runTime = parseInt(runPace[0]) * 60 + parseInt(runPace[1])*currentDistance.run;

    const totalTime = swimTime + t1Time + bikeTime + t2Time + runTime;

    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = (totalTime % 60).toFixed();

    setRaceTime(`${hours}:${minutes.toString().padStart(2, '0')}':${seconds.toString().padStart(2, '0')}"`);
  };
  const handleFinish = () => {
    calculateRaceTime(distance, distanceArr);
  };
  return (
    <>
      <Form
        layout={'horizontal'}
        initialValues={
          {
            swimPace: ['0', '0'],
            t1: ['0', '0'],
            distance: 'choose your race',
          }
        }
        footer={<>
          <Button
            color="primary"
            type="button"
            style={{width: '100%', marginBottom: '10px'}}
            size={'small'}
            onClick={handleFinish}
          >
            Submit
          </Button>
          <Button
            style={{width: '100%', marginBottom: '10px'}}
            size='small'
            color="primary"
            type="button"

          >
            Reset
          </Button>
        </>
        }
      >
        <Form.Item
          name='swimPace'
          layout={'vertical'}
          label={<AutoCenter>swim pace mm:ss</AutoCenter>}
        >
          <PickerView
            onChange={handleSwimPaceChange}
            columns={[valueArr(1), valueArr(1)]}
            style={{'--height': '20px', '--item-height': '1rem', 'width': '100%'}}
          />
        </Form.Item>
        <Form.Item
          name='t1'
          label={<AutoCenter> T1 time mm:ss</AutoCenter>}
          layout={'vertical'}
        >
          <PickerView
            onChange={handleT1TimeChange}
            columns={[valueArr(1), valueArr(1)]}
            style={{'--height': '20px', '--item-height': '1rem', 'width': '100%'}}
          />
        </Form.Item>
        <Form.Item
          name='bikeSpeed'
          label={<AutoCenter>Bike speed km/h</AutoCenter>}
          layout={'vertical'}
        >
          <PickerView
            onChange={handleBikeSpeedChange}
            columns={[valueArr(1)]}
            style={{'--height': '20px', '--item-height': '1rem', 'width': '100%'}}
          />
        </Form.Item>
        <Form.Item
          name='t2'
          label={<AutoCenter>T2 time mm:ss</AutoCenter>}
          layout={'vertical'}
        >
          <PickerView
            onChange={handleT2TimeChange}
            columns={[valueArr(1), valueArr(1)]}
            style={{'--height': '20px', '--item-height': '1rem', 'width': '100%'}}
          />
        </Form.Item>
        <Form.Item
          name='runPace'
          label={<AutoCenter>Run pace mm:ss</AutoCenter>}
          layout={'vertical'}
        >
          <PickerView
            onChange={handleRunPaceChange}
            columns={[valueArr(1), valueArr(1)]}
            style={{'--height': '20px', '--item-height': '1rem', 'width': '100%'}}
          />
        </Form.Item>
        <Form.Item
          name='distance'
          layout={'vertical'}
        >
          <PickerView
            columns={distanceOptions}
            onChange={(value) => {
              setDistance(Number(value[0]));
            }}
            style={{'--height': '20px', '--item-height': '1rem'}}
          />
        </Form.Item>
        {raceTime && <p>{`Your race time may be ${raceTime}`}</p>}
      </Form>;
    </>
  );
};

export default TriCalculatorDesktop;
