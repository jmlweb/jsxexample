import React from 'react';
import logo from './logo.svg';
import TestForm from '../testForm/testForm';
import PlusMinusComp from '../plusMinus/plusMinus';
import PlayGround from '../playground/playground';
import GridExample from '../grid/gridExample-01';

const App = () => (
  <div>
    <GridExample />
    <img src={logo} className="App-logo" alt="logo" width="200" />
    <PlayGround />
    <TestForm title="Enviar mensaje" />
    <PlusMinusComp boxTitleText="Mas o menos" />

  </div>
);


export default App;
