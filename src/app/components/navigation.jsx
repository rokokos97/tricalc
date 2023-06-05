import React from 'react';
import {Tabs} from 'antd-mobile';
import SwimRunBlock from './swimRunBlock';
import TriBlock from './triBlock';

const tabs = [
  {title: 'RUNNING', key: 'running', component: <SwimRunBlock />},
  {title: 'SWIMMING', key: 'swimming', component: <SwimRunBlock sport={'swimming'} />},
  {title: 'TRIATHLON', key: 'triathlon', component: <TriBlock />},
];

const Navigation = () => {
  return (
    <>
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

export default Navigation;
