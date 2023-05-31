import React from 'react';
import {Tabs} from 'antd-mobile';
import CalculatorMobile from './calculatorMobile';
import TriCalculatorMobile from './triCalculatorMobile';

const tabs = [
  {title: 'RUNNING', key: 'running', component: <CalculatorMobile />},
  {title: 'SWIMMING', key: 'swimming', component: <CalculatorMobile sport={'swimming'} />},
  {title: 'TRIATHLON', key: 'triathlon', component: <TriCalculatorMobile />},
];

const Main = () => {
  return (
    <div
    >
      <Tabs
        style={{
          'margin': '0 1.2rem 0',
          'paddingTop': '2.4rem',
          '--title-font-size': '1.5rem',
          '--content-padding': '0',
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.key}
            title={tab.title}
            style={{'padding': 'none'}}
          >
            {tab.component}
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Main;
