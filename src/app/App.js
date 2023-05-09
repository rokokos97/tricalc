import './App.css';
import React, {useState} from 'react';
import DistanceInput from './components/distanceInput';
import TimeInput from './components/timeInput';
import {Button} from 'antd';
import PaceResult from './paceResult';

function App() {
  const [distance, setDistance] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes]= useState(0);
  const [seconds, setSeconds] = useState(0);
  const [pace, setPace] = useState(null);
  const handleDistanceChange = (value) => {
    setDistance(value);
  };
  const handleHourDecrement = (id) => {
    switch (id) {
      case 1:
        setHours((prevState)=> prevState>0?prevState-1:0);
        break;
      case 2:
        setMinutes((prevState)=> prevState>0?prevState-1:0);
        break;
      default:
        setSeconds((prevState)=> prevState>0?prevState-1:0);
        break;
    }
  };
  const handleHourIncrement = (id) => {
    switch (id) {
      case 1:
        setHours((prevState)=> prevState+1);
        break;
      case 2:
        setMinutes((prevState)=> prevState+1);
        break;
      default:
        setSeconds((prevState)=> prevState+1);
        break;
    }
  };
  const calculatePace = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const paceInSeconds = totalSeconds / distance;

    const paceMinutes = Math.floor(paceInSeconds / 60);
    const paceSeconds = Math.round(paceInSeconds % 60);
    setPace(`${paceMinutes}:${paceSeconds < 10 ?
        '0' :
        ''}${paceSeconds} на км`,
    );
  };
  const resetAllData = () => {
    setPace(null);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };
  return (
    <>
      <div className="App">
        <DistanceInput
          value={distance}
          defaultOption={'Choose your distance'}
          name={'distance'}
          onChange={handleDistanceChange}
        />
        <TimeInput
          id={1}
          label="Hours"
          value={hours}
          onDecrement={handleHourDecrement}
          onIncrement={handleHourIncrement}
        />
        <TimeInput
          id={2}
          label="Minute"
          value={minutes}
          onDecrement={handleHourDecrement}
          onIncrement={handleHourIncrement}
        />
        <TimeInput
          id={3}
          label="Second"
          value={seconds}
          onDecrement={handleHourDecrement}
          onIncrement={handleHourIncrement}
        />
        <div>
          <Button
            type="primary"
            ghost
            onClick={()=>calculatePace()}>Calculate your pace</Button>
        </div>
        <PaceResult pace={pace} />
        <div>
          <Button onClick={()=>resetAllData()}>Cкинути розрахунки</Button>
        </div>
      </div>
    </>
  );
}

export default App;
