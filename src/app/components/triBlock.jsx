import React, {useEffect, useState} from 'react';
import {Form, PickerView} from 'antd-mobile';
import {createArrayOfOptions} from '../utils/createArrayOfOptions';
import {calculateTriRaceTime} from '../utils/calculateTriRaceTime';
import {useForm} from 'antd/lib/form/Form';
import {triDistanceOptions} from '../data/triDistanceOptions';
import ButtonsBlock from './buttonsBlock';
import MessageArea from './resultMessageArea';
// import {InformationCircleOutline} from 'antd-mobile-icons';

const TriBlock = () => {
  const [swimPace, setSwimPace] = useState(['0', '0']);
  const [transitZone1, setTransitZone1] = useState(['0', '0']);
  const [bikeSpeed, setBikeSpeed] = useState(['0']);
  const [transitZone2, setTransitZone2] = useState(['0', '0']);
  const [runPace, setRunPace] = useState(['0', '0']);
  const [distance, setDistance] = useState(null);
  const [raceTime, setRaceTime] = useState(null);
  const [isCalculateDisabled, setIsCalculateDisabled] = useState(true);
  const [form] = useForm();
  const formStyle = {
    '--border-top': 'none',
    '--border-bottom': 'none',
    '--border-inner': 'none',
    'paddingTop': '1.6rem',
  };
  const pickerView = {
    '--height': '12.2rem',
    '--item-height': '4rem',
    '--item-font-size': '2.4rem',
    'width': '17.3rem',
  };
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
    setRaceTime({tri: calculateTriRaceTime(
        distance,
        swimPace,
        transitZone1,
        bikeSpeed,
        transitZone2,
        runPace,
    )},
    );
  };
  return (
    <>
      <Form
        style={formStyle}
        layout={'horizontal'}
        form={form}
      >
        <div className='center'>
          <Form.Item
            name='swimPace'
          >
            <div className='title'>Swimming pace</div>
            <PickerView
              className='pickerView'
              onChange={handleSwimPaceChange}
              columns={[createArrayOfOptions( '\''), createArrayOfOptions( '\"')]}
              style={pickerView}
            />
          </Form.Item>
          <Form.Item
            name='t1'
          >
            <div className='title'>Transit zone 1</div>
            <PickerView
              onChange={handleT1TimeChange}
              columns={[createArrayOfOptions( '\''), createArrayOfOptions('\"')]}
              style={pickerView}
            />
          </Form.Item>
        </div>
        <div className='center'>
          <Form.Item
            name='bikeSpeed'
          >
            <div className='title'>Bike speed km/h</div>
            <PickerView
              onChange={handleBikeSpeedChange}
              columns={[createArrayOfOptions(undefined, undefined, undefined, 51)]}
              style={pickerView}
            />
          </Form.Item>
          <Form.Item
            name='t2'
          >
            <div className='title'>Transit zone 2</div>
            <PickerView
              onChange={handleT2TimeChange}
              columns={[createArrayOfOptions('\''), createArrayOfOptions( '\"')]}
              style={pickerView}
            />
          </Form.Item>
        </div>
        <div className='center'>
          <Form.Item
            name='runPace'
          >
            <div className='title'>Running pace</div>
            <div className='center'>
              <PickerView
                onChange={handleRunPaceChange}
                columns={[createArrayOfOptions('\''), createArrayOfOptions( '\"')]}
                style={pickerView}
              />
            </div>
          </Form.Item>
          <Form.Item
            name='distance'
          >
            <div className='title'>
              {
                'Distance km '
              }
              {/* <InformationCircleOutline */}
              {/*   onClick={() => */}
              {/*     Dialog.alert({ */}
              {/*       content: ( */}
              {/*         <div className='dialog'> */}
              {/*           <p>Sprint - 25 km 750 m</p> */}
              {/*           <p>Olympic - 51 km 500 m</p> */}
              {/*           <p>Half Ironman - 112 km 997 m</p> */}
              {/*           <p>Ironman - 225 km 994 m</p> */}
              {/*           <p>Kyivman - 420 km</p> */}
              {/*         </div> */}
              {/*       ), */}
              {/*     }) */}
              {/*   } */}
              {/* /> */}
            </div>
            <div className='center'>
              <PickerView
                columns={triDistanceOptions}
                onChange={(value) => {
                  setDistance(value[0]);
                }}
                style={pickerView}
              />
            </div>
          </Form.Item>
        </div>
        {raceTime && <MessageArea result={raceTime}/>}
      </Form>
      <ButtonsBlock
        onReset={handleReset}
        onSubmit={handleSubmit}
        isCalculateDisabled={isCalculateDisabled}/>
    </>
  );
};

export default TriBlock;
