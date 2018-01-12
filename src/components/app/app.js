import React from 'react';
import logo from './logo.svg';
import TestForm from '../testForm/testForm';

const App = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" width="200" />
    <TestForm title="Enviar mensaje" />
  </div>
);

export default App;
