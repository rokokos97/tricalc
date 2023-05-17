import React from 'react';
import TriCalculator from './components/triCalculator';
import {Route, Routes} from 'react-router';
import RunCalculatorMobile from './components/runCalculatorMobile';
import SwimCalculator from './components/swimCalculator';
import Main from './components/main';
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path={'/run'} element={<RunCalculatorMobile/>}/>
        <Route path={'/swim'} element={<SwimCalculator/>}/>
        <Route path={'/tri'} element={<TriCalculator/>}/>
      </Routes>
    </div>
  );
}
export default App;
