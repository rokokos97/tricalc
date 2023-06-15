import React from 'react'
import { Tabs } from 'antd-mobile'
import SwimBlock from './swimBlock'
import RunBlock from './runBlock'
import type { ITabs } from '../../interfaces'
import TriBlock from './triBlock'

const tabs: ITabs[] = [
  { title: 'RUNNING', key: 'running', component: <RunBlock/> },
  { title: 'SWIMMING', key: 'swimming', component: <SwimBlock/> },
  { title: 'TRIATHLON', key: 'tri', component: <TriBlock/> }
]

const Navigation: React.FC = () => {
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
  )
}

export default Navigation
