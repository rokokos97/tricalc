import React, {useEffect, useState} from 'react';
import {Form, PickerView, Result} from 'antd-mobile';
import {valueArr} from '../utils/valueArr';
import {calculateRaceTime} from '../utils/raceTimeCalculate';
import {useForm} from 'antd/lib/form/Form';
import {triDistanceOptions} from '../data/triDistanceOptions';
import ResetConfirmButtonBlock from './resetConfirmButtonBlock';
import {SmileOutline} from 'antd-mobile-icons';

const TriCalculatorDesktop = () => {
  const [swimPace, setSwimPace] = useState(['0', '0']);
  const [transitZone1, setTransitZone1] = useState(['0', '0']);
  const [bikeSpeed, setBikeSpeed] = useState(['0']);
  const [transitZone2, setTransitZone2] = useState(['0', '0']);
  const [runPace, setRunPace] = useState(['0', '0']);
  const [distance, setDistance] = useState(null);
  const [raceTime, setRaceTime] = useState(null);
  const [isCalculateDisabled, setIsCalculateDisabled] = useState(true);
  const [form] = useForm();
  const pickerViewStyle = {
    '--height': '12.2rem',
    '--item-height': '4rem',
    '--item-font-size': '2.4rem',
    'width': '17.3rem',
  };
  const displaySpaceEvenly = {display: 'flex', justifyContent: 'center'};
  const handleSwimPaceChange = (value) => setSwimPace(value);
  const handleT1TimeChange = (value) => setTransitZone1(value);
  const handleBikeSpeedChange = (value) => setBikeSpeed(value);
  const handleT2TimeChange = (value) => setTransitZone2(value);
  const handleRunPaceChange = (value) => setRunPace(value);
  const handleReset = () => {
    setIsCalculateDisabled(true);
    setRaceTime(null);
    setDistance(null);
    setSwimPace(['0', '0']);
    setTransitZone1(['0', '0']);
    setBikeSpeed(['0']);
    setTransitZone2(['0', '0']);
    setRunPace(['0', '0']);
    form.resetFields(['swimPace', 't1', 'bikeSpeed', 't2', 'runPace', 'distance']);
  };
  useEffect(() => {
    if (
      (+swimPace[0]!==0 || +swimPace[1]!==0) &&
      (+transitZone1[0]!==0 || +transitZone1[1]!==0) &&
      (+bikeSpeed[0]!==0) &&
      (+transitZone2[0]!==0 || +transitZone2[1]!==0) &&
      (+runPace[0]!==0 || +runPace[1]!==0)
    ) {
      setIsCalculateDisabled(false);
    }
  }, [swimPace, transitZone1, bikeSpeed, transitZone2, runPace]);
  const handleSubmit = () => {
    setRaceTime(
        calculateRaceTime(
            distance,
            swimPace,
            transitZone1,
            bikeSpeed,
            transitZone2,
            runPace,
        ));
  };
  return (
    <>
      <Form
        layout={'horizontal'}
        form={form}
        style={{'--border-top': 'none', '--border-bottom': 'none', '--border-inner': 'none', 'paddingTop': '1.6rem'}}
        footer={
          <ResetConfirmButtonBlock
            onReset={handleReset}
            onSubmit={handleSubmit}
            isCalculateDisabled={isCalculateDisabled}/>
        }
      >
        <div style={displaySpaceEvenly}>
          <Form.Item
            name='swimPace'
          >
            <div className='title'>Swimming pace</div>
            <PickerView
              onChange={handleSwimPaceChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"')]}
              style={pickerViewStyle}
            />
          </Form.Item>
          <Form.Item
            name='t1'
          >
            <div className='title'>Transit zone 1</div>
            <PickerView
              onChange={handleT1TimeChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"')]}
              style={pickerViewStyle}
            />
          </Form.Item>
        </div>
        <div style={displaySpaceEvenly}>
          <Form.Item
            name='runPace'
          >
            <div className='title'>Running pace</div>
            <div style={displaySpaceEvenly}>
              <PickerView
                onChange={handleRunPaceChange}
                columns={[valueArr(1, '\''), valueArr(1, '\"')]}
                style={pickerViewStyle}
              />
            </div>
          </Form.Item>
          <Form.Item
            name='t2'
          >
            <div className='title'>Transit zone 2</div>
            <PickerView
              onChange={handleT2TimeChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"')]}
              style={pickerViewStyle}
            />
          </Form.Item>
        </div>
        <div style={displaySpaceEvenly}>
          <Form.Item
            name='bikeSpeed'
          >
            <div className='title'>Bike speed km/h</div>
            <PickerView
              onChange={handleBikeSpeedChange}
              columns={[valueArr(1)]}
              style={pickerViewStyle}
            />
          </Form.Item>
          <Form.Item
            name='distance'
          >
            <div className='title'>Race distance km</div>
            <div style={displaySpaceEvenly}>
              <PickerView
                columns={triDistanceOptions}
                onChange={(value) => {
                  setDistance(value[0]);
                }}
                style={pickerViewStyle}
              />
            </div>
          </Form.Item>
        </div>
        {raceTime && <Result
          icon={<SmileOutline />}
          status='success'
          title='Well done'
          description={`Your race time may be ${raceTime}`}
        />}
      </Form>
    </>
  );
};

export default TriCalculatorDesktop;
