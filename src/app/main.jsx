import React, {useState} from 'react';
import DistanceInput from './components/distanceInput';
import {Button, InputNumber, Layout, Space} from 'antd';
import PaceResult from './components/paceResult';
import {Content, Footer, Header} from 'antd/es/layout/layout';


const Main = () => {
  const [distance, setDistance] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes]= useState(0);
  const [seconds, setSeconds] = useState(0);
  const [pace, setPace] = useState(null);
  const handleDistanceChange = (value) => {
    setDistance(value);
  };
  const calculatePace = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const paceInSeconds = totalSeconds / distance;
    const paceMinutes = Math.floor(paceInSeconds / 60);
    const paceSeconds = Math.round(paceInSeconds % 60);
    if (distance) {
      setPace(`${paceMinutes}:${paceSeconds < 10 ?
        '0' :
        ''}${paceSeconds}`,
      );
    }
  };
  const resetAllData = () => {
    setPace(null);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };
  const handleHoursChange = (value) => {
    setHours(value);
    console.log('changed', value);
  };
  const handleMinutesChange = (value) => {
    setMinutes(value);
    console.log('changed', value);
  };
  const handleSecondsChange = (value) => {
    setSeconds(value);
    console.log('changed', value);
  };
  return (
    <>
      <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
        <Layout>
          <Header style={{
            textAlign: 'center',
            color: '#fff',
            height: 64,
            paddingInline: 50,
            lineHeight: '64px',
            backgroundColor: '#7dbcea',
          }}>
           PACE CALCULATOR
          </Header>
          <Content style={{
            textAlign: 'center',
            minHeight: 120,
            lineHeight: '120px',
            color: '#fff',
            backgroundColor: '#108ee9',
          }}>
            <div className="App">
              <DistanceInput
                value={distance}
                defaultOption={'Choose your distance'}
                name={'distance'}
                onChange={handleDistanceChange}
              />
              <div className="d-flex">
                <div className="flex-column">
                  <span>Hours</span>
                  <InputNumber
                    min={0}
                    max={59}
                    onChange={handleHoursChange}
                    defaultValue={0}/>
                </div>
                <div>
                  <span>Minutes</span>
                  <InputNumber
                    min={0}
                    max={59}
                    onChange={handleMinutesChange}
                    defaultValue={0}/>
                </div>
                <div>
                  <span>Seconds</span>
                  <InputNumber
                    min={0}
                    max={59}
                    onChange={handleSecondsChange}
                    defaultValue={0}/>
                </div>
              </div>
              <div>
                <Button
                  type="primary"
                  ghost
                  onClick={()=>calculatePace()}>Calculate your pace</Button>
              </div>
              <PaceResult pace={pace} />
              <div>
                <Button onClick={()=>resetAllData()}>Reset</Button>
              </div>
            </div>
          </Content>
          <Footer style={{
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#7dbcea',
          }}>
            Footer
          </Footer>
        </Layout>
      </Space>
    </>
  );
};

export default Main;
