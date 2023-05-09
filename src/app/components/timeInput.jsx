import React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';


const TimeInput = (props) => {
  return (
    <>
      <div>{props.label}</div>
      <div>{props.value}</div>
      <Button onClick={()=>props.onDecrement(props.id)}>-</Button>
      <Button onClick={()=>props.onIncrement(props.id)}>+</Button>
    </>
  );
};

TimeInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  id: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

export default TimeInput;
