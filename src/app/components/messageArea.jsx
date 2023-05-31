import React from 'react';
const messageArea = ({result}) => {
  return (
    <div style={{
      margin: '0 auto',
      width: '97%',
      background: 'rgba(0, 181, 120, 0.1)',
      borderRadius: '0.8rem',
      textAlign: 'center',
      padding: '1rem',
    }}>
      <div>{result}</div>
      <div>Well Dona!</div>
      <div>You Are Bad Ass!</div>
    </div>
  );
};
export default messageArea;
