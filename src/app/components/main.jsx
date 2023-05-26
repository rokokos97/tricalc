import React from 'react';
import {Tabs} from 'antd-mobile';
import CalculatorMobile from './calculatorMobile';
import TriCalculatorMobile from './triCalculatorMobile';

const Main = () => {
  return (
    <>
      <Tabs
        style={{
          '--title-font-size': '24px',
          '--title-padding': '100px',
        }}
      >
        <Tabs.Tab title='Running' key='fruits' >
          <CalculatorMobile/>
        </Tabs.Tab>
        <Tabs.Tab title='Swimming' key='vegetables'>
          <CalculatorMobile sport={'swim'}/>
        </Tabs.Tab>
        <Tabs.Tab title='Triathlon' key='animals'>
          <TriCalculatorMobile/>
        </Tabs.Tab>
      </Tabs>
    </>
  );
};
export default Main;
