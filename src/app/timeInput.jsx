import {Button, Form} from 'react-bootstrap';
import React from 'react';

const TimeInput = ({
  controlId,
  label,
  showHours,
  hours,
  minutes,
  seconds,
  onHoursIncrement,
  onHoursDecrement,
  onMinutesIncrement,
  onMinutesDecrement,
  onSecondsIncrement,
  onSecondsDecrement,
}) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <div className="d-flex">
        {showHours && (
          <div className="me-3">
            <Button variant="secondary" onClick={onHoursDecrement}>
              -
            </Button>
            <span className="mx-2">{hours}</span>
            <Button variant="secondary" onClick={onHoursIncrement}>
              +
            </Button>
          </div>
        )}
        <div className="me-3">
          <Button variant="secondary" onClick={onMinutesDecrement}>
            -
          </Button>
          <span className="mx-2">{minutes}</span>
          <Button variant="secondary" onClick={onMinutesIncrement}>
            +
          </Button>
        </div>
        <div>
          <Button variant="secondary" onClick={onSecondsDecrement}>
            -
          </Button>
          <span className="mx-2">{seconds}</span>
          <Button variant="secondary" onClick={onSecondsIncrement}>
            +
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default TimeInput;
