import React from 'react';
import PropTypes from 'prop-types';
import {Select} from 'antd';

const DistanceInput = ({
  onChange,
  defaultOption,
}) => {
  const distanceList = [
    {label: '1000 meters', value: 1},
    {label: '1 mile', value: 1.609},
    {label: '5000 meters', value: 5},
    {label: '10000 meters', value: 10},
    {label: 'Half marathon', value: 21.0975},
    {label: 'Marathon', value: 42.195},
  ];
  const handleChange = (value) => {
    console.log(value);
    onChange(value);
  };
  return (
    <div>
      <Select
        defaultValue={defaultOption}
        style={{width: 220}}
        onChange={handleChange}
        options={distanceList}
      />
    </div>
  );
};
DistanceInput.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
};

export default DistanceInput;
