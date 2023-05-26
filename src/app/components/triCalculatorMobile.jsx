import React, {useEffect, useState} from 'react';
import {AutoCenter, Form, PickerView, Result} from 'antd-mobile';
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
    '--height': '70px',
    '--item-height': '1.8rem',
    '--item-font-size': '1.6rem',
    'width': '140px',
  };
  const displaySpaceEvenly = {display: 'flex', justifyContent: 'space-evenly'};
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
    form.resetFields(['swimPace', 't1', 'bikeSpeed', 't2', 'runPace']);
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
        style={{'--border-top': 'none', '--border-bottom': 'none', '--border-inner': 'none'}}
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
            layout='vertical'
            label={
              <AutoCenter>
                <div>Swimming pace</div>
              </AutoCenter>
            }
          >
            <PickerView
              onChange={handleSwimPaceChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"')]}
              style={pickerViewStyle}
            />
          </Form.Item>
          <Form.Item
            name='t1'
            layout='vertical'
            label={
              <AutoCenter>
                <div>Transit zone 1</div>
              </AutoCenter>
            }
          >
            <PickerView
              onChange={handleT1TimeChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"')]}
              style={pickerViewStyle}
            />
          </Form.Item>
        </div>
        <div style={displaySpaceEvenly}>
          <Form.Item
            name='bikeSpeed'
            label={
              <AutoCenter>
                <div>Bike speed km/h</div>
              </AutoCenter>
            }
            layout={'vertical'}
          >
            <PickerView
              onChange={handleBikeSpeedChange}
              columns={[valueArr(1)]}
              style={pickerViewStyle}
            />
          </Form.Item>
        </div>
        <div style={displaySpaceEvenly}>
          <Form.Item
            name='t2'
            label={
              <AutoCenter>
                <div>Transit zone 2</div>
              </AutoCenter>
            }
            layout={'vertical'}
          >
            <PickerView
              onChange={handleT2TimeChange}
              columns={[valueArr(1, '\''), valueArr(1, '\"')]}
              style={pickerViewStyle}
            />
          </Form.Item>
          <Form.Item
            name='runPace'
            label={<AutoCenter><div>Running pace</div></AutoCenter>}
            layout={'vertical'}
          >
            <div style={displaySpaceEvenly}>
              <PickerView
                onChange={handleRunPaceChange}
                columns={[valueArr(1, '\''), valueArr(1, '\"')]}
                style={pickerViewStyle}
              />
            </div>
          </Form.Item>
        </div>
        <Form.Item
          name='distance'
          label={
            <AutoCenter>
              <div>Choose your race distance</div>
            </AutoCenter>
          }
          layout={'vertical'}
        >
          <div style={displaySpaceEvenly}>
            <PickerView
              columns={triDistanceOptions}
              onChange={(value) => {
                setDistance(value[0]);
              }}
              style={{
                '--height': '100px',
                '--item-height': '2rem',
                '--item-font-size': '1.8rem',
                'width': '100%',
              }}
            />
          </div>
        </Form.Item>
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
