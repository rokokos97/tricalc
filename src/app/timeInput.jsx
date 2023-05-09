import React from 'react';
import {Form, Button} from 'antd';
import PropTypes from 'prop-types';

const TimeInput = ({
  hours,
  minutes,
  seconds,
  onHoursChange,
  onMinutesChange,
  onSecondsChange,
}) => {
  return (
    <Form.Item label="Час">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Button onClick={onHoursChange(-1)}>-</Button>
        <div
          style={{width: 40, textAlign: 'center', margin: '0 10px'}}>{hours}
        </div>
        <Button onClick={onHoursChange(1)}>+</Button>
        <span>:</span>
        <Button onClick={onMinutesChange(-1)}>-</Button>
        <div
          style={{width: 40, textAlign: 'center', margin: '0 10px'}}>{minutes}
        </div>
        <Button onClick={onMinutesChange(1)}>+</Button>
        <span>:</span>
        <Button onClick={onSecondsChange(-1)}>-</Button>
        <div
          style={{width: 40, textAlign: 'center', margin: '0 10px'}}>{seconds}
        </div>
        <Button onClick={onSecondsChange(1)}>+</Button>
      </div>
    </Form.Item>
  );
};
TimeInput.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  onHoursChange: PropTypes.number,
  onMinutesChange: PropTypes.func,
  onSecondsChange: PropTypes.func,
};
export default TimeInput;

