import React from 'react';
import PropTypes from 'prop-types';
import TimeInput from './components/timeInput';

const Block = ({item}) => {
  console.log(item);
  return (
    <>
      <span>{item.name}</span>
      <span>  </span>
      <span>{item.measurement}</span>
      {item.fields.map((field, index)=>(
        <TimeInput
          key={index}
          field={field} />
      ),
      )}
    </>
  );
};
Block.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Block;
