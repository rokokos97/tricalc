import React from 'react';
import {Tabs} from 'antd-mobile';
import CalculatorMobile from './calculatorMobile';
import TriCalculatorMobile from './triCalculatorMobile';

const tabs = [
  {title: 'Running', key: 'running', component: <CalculatorMobile />},
  {title: 'Swimming', key: 'swimming', component: <CalculatorMobile sport={'swimming'} />},
  {title: 'Triathlon', key: 'triathlon', component: <TriCalculatorMobile />},
];

const Main = () => {
  return (
    <>
      <Tabs
        style={{
          '--title-font-size': '24px',
          '--title-padding': '100px',
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.key} title={tab.title}>
            {tab.component}
          </Tabs.Tab>
        ))}
      </Tabs>
    </>
  );
};

export default Main;
