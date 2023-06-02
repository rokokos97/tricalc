import React from 'react';
const messageArea = ({result, pace}) => {
  return (
    <div style={{
      margin: '0 0.5rem',
      background: 'rgba(0, 181, 120, 0.3)',
      borderRadius: '0.8rem',
      textAlign: 'center',
      padding: '1rem',
    }}>
      <div>{pace?`Your pace may be  ${result}`:`Your time ${result}`}</div>
      <div>Well Dona!</div>
      <div>You Are Bad Ass!</div>
    </div>
  );
};
export default messageArea;
