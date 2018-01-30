import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
//import logo from './logo.svg';
import TestForm from '../testForm/testForm';
//import PlusMinusComp from '../plusMinus/plusMinus';
import PlayGround from '../playground/playground';
import GridExam from '../grid/syled-grid-ex';
import { Grid, Cell } from 'styled-css-grid';
import GridExample from '../grid/gridExample-01';
import StyledSistemExample from '../grid/styled-system-example';
import ArticleCardList from '../articleCard/ArticleCardList';
import GridThoughts from '../gridThoughts/gridThoughts';
import FlexBoxGrid from '../flexBoxGrid/flexBoxGrid';
import MuiExample from '../mui/mui';
import MyGrid from '../myGrid/myGrid';
import MainHeader from '../mainHeader/mainHeader';


const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <MainHeader />

      {/* <img src={logo} className="App-logo" alt="logo" width="200" /> */}

      {/* <h2>MUI</h2>
      <MuiExample />


      <h2> react-grid-system</h2>
      <GridExample />


      <h2>styled-system</h2>
      <StyledSistemExample />


      <h2>styled-css-grid</h2>
      <GridThoughts />


      <h2>react-flexbox-grid</h2>
      <FlexBoxGrid /> */}

      {/* <MyGrid /> */}

      <h5>styled-css-grid</h5>
      <ArticleCardList />

      <PlayGround />

      <TestForm title="Enviar mensaje" />
      {/* <PlusMinusComp boxTitleText='Mas o menos' /> */}

    </div>
  </ThemeProvider>
);


export default App;
