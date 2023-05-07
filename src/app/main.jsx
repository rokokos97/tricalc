import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import TimeInput from './timeInput';
function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [distance, setDistance] = useState(5);
  const [pace, setPace] = useState('');

  const handleHoursIncrement = () => {
    setHours((prevHours) => prevHours + 1);
  };

  const handleHoursDecrement = () => {
    if (hours > 0) {
      setHours((prevHours) => prevHours - 1);
    }
  };

  const handleMinutesIncrement = () => {
    if (minutes === 59) {
      setHours((prevHours) => prevHours + 1);
      setMinutes(0);
    } else {
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  };

  const handleMinutesDecrement = () => {
    if (minutes === 0 && hours > 0) {
      setHours((prevHours) => prevHours - 1);
      setMinutes(59);
    } else if (minutes > 0) {
      setMinutes((prevMinutes) => prevMinutes - 1);
    }
  };

  const handleSecondsIncrement = () => {
    if (seconds === 59) {
      if (minutes === 59) {
        setHours((prevHours) => prevHours + 1);
        setMinutes(0);
      } else {
        setMinutes((prevMinutes) => prevMinutes + 1);
      }
      setSeconds(0);
    } else {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }
  };

  const handleSecondsDecrement = () => {
    if (seconds === 0) {
      if (minutes === 0 && hours > 0) {
        setHours((prevHours) => prevHours - 1);
        setMinutes(59);
      } else if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
      }
      setSeconds(59);
    } else {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
  };

  const handleDistanceChange = (event) => {
    setDistance(parseFloat(event.target.value));
  };

  const handleCalculatePace = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const paceInSeconds = totalSeconds / distance;
    const paceMinutes = Math.floor(paceInSeconds / 60);
    const paceSeconds = Math.round(paceInSeconds % 60);
    const formattedPace = `${paceMinutes}:${paceSeconds < 10 ? '0' : ''}${paceSeconds}`;
    setPace(formattedPace);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Калькулятор темпу бігу</h1>

      <Form>
        <TimeInput
          controlId="time"
          label="Повний час проходження дистанції"
          showHours={true}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onHoursIncrement={handleHoursIncrement}
          onHoursDecrement={handleHoursDecrement}
          onMinutesIncrement={handleMinutesIncrement}
          onMinutesDecrement={handleMinutesDecrement}
          onSecondsIncrement={handleSecondsIncrement}
          onSecondsDecrement={handleSecondsDecrement}
        />

        <Form.Group controlId="distance">
          <Form.Label>Дистанція:</Form.Label>
          <Form.Select value={distance} onChange={handleDistanceChange}>
            <option value={5}>5 км</option>
            <option value={10}>10 км</option>
            <option value={21.0975}>Півмарафон</option>
            <option value={42.195}>Марафон</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={handleCalculatePace}>
          Розрахувати темп
        </Button>
      </Form>

      {pace && (
        <div className="text-center mt-5">
          <h2>{`Темп бігу: ${pace} на км`}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
