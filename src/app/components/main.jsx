import React from 'react';
import {Tabs} from 'antd-mobile';
import RunCalculatorMobile from './runCalculatorMobile';
import SwimCalculatorMobile from './swimCalculatorMobile';
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
          <RunCalculatorMobile/>
        </Tabs.Tab>
        <Tabs.Tab title='Swimming' key='vegetables'>
          <SwimCalculatorMobile/>
        </Tabs.Tab>
        <Tabs.Tab title='Triathlon' key='animals'>
          <TriCalculatorMobile/>
        </Tabs.Tab>
      </Tabs>
    </>
  );
};
export default Main;
