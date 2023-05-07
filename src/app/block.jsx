import React from 'react';
import PropTypes from 'prop-types';
import Counter from './components/counter';

const Block = ({item}) => {
  console.log(item);
  return (
    <>
      <span>{item.name}</span>
      <span>  </span>
      <span>{item.measurement}</span>
      {item.fields.map((field, index)=>(
        <Counter
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
