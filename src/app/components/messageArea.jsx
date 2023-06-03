import React from 'react';
const messageArea = ({result}) => {
  return (
    <div style={{
      margin: '0 0.5rem',
      background: 'rgba(0, 181, 120, 0.3)',
      borderRadius: '0.8rem',
      textAlign: 'center',
      padding: '1rem',
    }}>
      <div>
        { result.time &&
          `Your time ${result.time[0]}:${result.time[1]}':${result.time[2]}"`
        }
      </div>
      <div>
        { result.pace &&
          `Your pace may be ${result.pace[0]}':${result.pace[1]}"`}
      </div>
      <div>
        { result.tri &&
          `Your time ${result.tri[0]}:${result.tri[1]}':${result.tri[2]}"`}
      </div>
      <div>Well Dona!</div>
      <div>You Are Bad Ass!</div>
    </div>
  );
};
export default messageArea;
