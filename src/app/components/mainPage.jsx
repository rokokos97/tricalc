import React from 'react';
import {Tabs} from 'antd-mobile';
import CalculatorMobile from './calculatorMobile';
import TriCalculator from './triCalculator';

const tabs = [
  {title: 'RUNNING', key: 'running', component: <CalculatorMobile />},
  {title: 'SWIMMING', key: 'swimming', component: <CalculatorMobile sport={'swimming'} />},
  {title: 'TRIATHLON', key: 'triathlon', component: <TriCalculator />},
];

const MainPage = () => {
  return (
    <>
      {/* <p className='header'>TRIC 1.0</p> */}
      <div className='main'>
        <Tabs
          className='tabs'
        >
          {tabs.map((tab) => (
            <Tabs.Tab
              key={tab.key}
              title={tab.title}
            >
              {tab.component}
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default MainPage;
