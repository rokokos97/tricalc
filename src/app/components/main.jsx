import React from 'react';
import {Tabs} from 'antd-mobile';
import RunCalculatorMobile from './runCalculatorMobile';
import SwimCalculatorMobile from './swimCalculatorMobile';
import TriCalculatorMobile from './triCalculatorMobile';

const Main = () => {
  return (
    <>
      <Tabs>
        <Tabs.Tab title='RUN' key='fruits'>
          <RunCalculatorMobile/>
        </Tabs.Tab>
        <Tabs.Tab title='SWIM' key='vegetables'>
          <SwimCalculatorMobile/>
        </Tabs.Tab>
        <Tabs.Tab title='TRI' key='animals'>
          <TriCalculatorMobile/>
        </Tabs.Tab>
      </Tabs>
    </>
  );
};
export default Main;
