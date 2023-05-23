import React, {useState} from 'react';
import {AutoCenter, Selector, Space} from 'antd-mobile';
import RunCalculatorMobile from './runCalculatorMobile';
import SwimCalculatorMobile from './swimCalculatorMobile';
import TriCalculatorMobile from './triCalculatorMobile';

const Main = () => {
  const [value, setValue] = useState('1');
  const options = [
    {
      label: 'RUN',
      value: '1',
    },
    {
      label: 'SWIM',
      value: '2',
    },
    {
      label: 'TRI',
      value: '3',
    },
  ];
  function changeSport(v) {
    switch (v) {
      case '2':
        return <SwimCalculatorMobile/>;
      case '3':
        return <TriCalculatorMobile/>;
      default:
        return <RunCalculatorMobile/>;
    }
  }
  return (
    <>
      <AutoCenter>
        <Space style={{marginTop: '15px'}}>
          <Selector
            options={options}
            style={{
              '--border-radius': '100px',
              '--border': 'solid transparent 1px',
              '--checked-border': 'solid var(--adm-color-primary) 1px',
              '--padding': '8px 34px',
            }}
            showCheckMark={false}
            value={[value]}
            onChange={(v) => {
              if (v.length) {
                setValue(v[0]);
              }
            }}
          />
        </Space>
      </AutoCenter>
      {changeSport(value)}
    </>
  );
};

export default Main;
