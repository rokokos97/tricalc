import React from 'react';
import {Select} from 'antd';
import PropTypes from 'prop-types';
const {Option} = Select;

const DistanceInput = ({distance, onDistanceChange}) => {
  const handleDistanceChange = (value) => {
    onDistanceChange(parseFloat(value));
  };

  return (
    <div>
      <label>Distance:</label>
      <Select value={distance.toString()} onChange={handleDistanceChange}>
        <Option value="1">1 км</Option>
        <Option value="1.609">1 миля</Option>
        <Option value="5">5 км</Option>
        <Option value="10">10 км</Option>
        <Option value="21.0975">Півмарафон</Option>
        <Option value="42.195">Марафон</Option>
        <Option value="50">50 км</Option>
      </Select>
    </div>
  );
};
DistanceInput.propTypes = {
  distance: PropTypes.number,
  onDistanceChange: PropTypes.func,
};
export default DistanceInput;
