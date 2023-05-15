import React from 'react';
import NavBar from './navBar';
import {Card} from 'antd';


const Main = () => {
  return (
    <>
      <Card title={<NavBar/>} bordered={true} style={{
        margin: '20px',
        textAlign: 'center',
      }} >
        <h1>
          This is pace calculator by Cяйво!
        </h1>
      </Card>
    </>
  );
};

export default Main;
