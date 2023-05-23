import React, {useEffect, useState} from 'react';
import {AutoCenter, Button, Form, PickerView} from 'antd-mobile';
import {valueArr} from '../utils/valueArr';
import {calculateRaceTime} from '../utils/raceTimeCalculate';
import {useForm} from 'antd/lib/form/Form';


const TriCalculatorDesktop = () => {
  const [swimPace, setSwimPace] = useState(['0', '0']);
  const [t1, setT1] = useState(['0', '0']);
  const [bikeSpeed, setBikeSpeed] = useState(['0']);
  const [t2, setT2] = useState(['0', '0']);
  const [runPace, setRunPace] = useState(['0', '0']);
  const [distance, setDistance] = useState(null);
  const [raceTime, setRaceTime] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [form] = useForm();
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
  const handleReset = () => {
    setRaceTime(null);
    setIsDisabled(false);
    setDistance(null);
    setSwimPace(['0', '0']);
    setT1(['0', '0']);
    setBikeSpeed(['0']);
    setT2(['0', '0']);
    setRunPace(['0', '0']);
    form.resetFields();
  };
  useEffect(() => {
    if (
      (swimPace[0]>0 || swimPace[1]>0) &&
      (t1[0]>0 || t1[1]>0) &&
      (bikeSpeed[0]>0) &&
      (t2[0]>0 || t2[1]>0) &&
      (runPace[0]>0 || runPace[1]>0)
    ) {
      setIsDisabled(true);
    }
  }, [swimPace, t1, bikeSpeed, t2, runPace]);
  const handleFinish = () => {
    setRaceTime(calculateRaceTime(distance, distanceArr, swimPace, t1, bikeSpeed, t2, runPace));
  };
  return (
    <>
      <Form
        layout={'horizontal'}
        form={form}
        style={{'--border-top': 'none', '--border-bottom': 'none', '--border-inner': 'none'}}
        footer={<>
          <Button
            color="primary"
            type="button"
            style={{width: '100%', marginBottom: '10px'}}
            size={'small'}
            disabled={!isDisabled}
            onClick={handleFinish}
          >
            Calculate
          </Button>
          <Button
            style={{width: '100%', marginBottom: '10px'}}
            size='small'
            color="primary"
            type="button"
            onClick={handleReset}
          >
            Reset
          </Button>
        </>
        }
      >
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <Form.Item
            name='swimPace'
            layout={'vertical'}
            label={
              <AutoCenter>
                <div>swim pace</div>
                <div style={{'textAlign': 'center'}}>{' mm  :  ss '}</div>
              </AutoCenter>
            }
          >
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <PickerView
                onChange={handleSwimPaceChange}
                columns={[valueArr(1), valueArr(1)]}
                style={{'--height': '40px', '--item-height': '1rem', 'width': '100%'}}
              />
            </div>
          </Form.Item>
          <Form.Item
            name='t1'
            label={
              <AutoCenter>
                <div>T1 time</div>
                <div style={{'textAlign': 'center'}}>{' mm  :  ss '}</div>
              </AutoCenter>
            }
            layout={'vertical'}
          >
            <PickerView
              onChange={handleT1TimeChange}
              columns={[valueArr(1), valueArr(1)]}
              style={{'--height': '40px', '--item-height': '1rem', 'width': '100%'}}
            />
          </Form.Item>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <Form.Item
            name='bikeSpeed'
            label={
              <AutoCenter>
                <div>Bike speed</div>
                <div style={{'textAlign': 'center'}}>{' km/h '}</div>
              </AutoCenter>
            }
            layout={'vertical'}
          >
            <PickerView
              onChange={handleBikeSpeedChange}
              columns={[valueArr(1)]}
              style={{'--height': '40px', '--item-height': '1rem', 'width': '100%'}}
            />
          </Form.Item>
          <Form.Item
            name='t2'
            label={
              <AutoCenter>
                <div>T2 time</div>
                <div style={{'textAlign': 'center'}}>{' mm  :  ss '}</div>
              </AutoCenter>
            }
            layout={'vertical'}
          >
            <PickerView
              onChange={handleT2TimeChange}
              columns={[valueArr(1), valueArr(1)]}
              style={{'--height': '40px', '--item-height': '1rem', 'width': '100%'}}
            />
          </Form.Item>
        </div>
        <Form.Item
          name='runPace'
          label={<AutoCenter><div>Run pace</div>
            <div style={{'textAlign': 'center'}}>{'mm : ss'}</div></AutoCenter>}
          layout={'vertical'}
        >
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PickerView
              onChange={handleRunPaceChange}
              columns={[valueArr(1), valueArr(1)]}
              style={{'--height': '50px', '--item-height': '1rem', 'width': '40%'}}
            />
          </div>
        </Form.Item>
        <Form.Item
          name='distance'
          label={
            <AutoCenter>
              <div>choose your race distance</div>
            </AutoCenter>
          }
          layout={'vertical'}
        >
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PickerView
              columns={distanceOptions}
              onChange={(value) => {
                setDistance(value[0]);
              }}
              style={{'--height': '70px', '--item-height': '1rem', 'width': '60%'}}
            />
          </div>
        </Form.Item>
        {raceTime && <p style={{'textAlign': 'center'}}>{`Your race time may be ${raceTime}`}</p>}
      </Form>;
    </>
  );
};

export default TriCalculatorDesktop;
