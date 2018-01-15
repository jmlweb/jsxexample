import React from 'react';
import logo from './logo.svg';
import TestForm from '../testForm/testForm';
import PlusMinusComp from '../plusMinus/plusMinus';

const App = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" width="200" />
    <TestForm title="Enviar mensaje" />
    <PlusMinusComp boxTitle="Mas o menos" />
  </div>
);


export default App;
