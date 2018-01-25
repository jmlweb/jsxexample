import React from 'react';
import logo from './logo.svg';
import TestForm from '../testForm/testForm';
import PlusMinusComp from '../plusMinus/plusMinus';
import PlayGround from '../playground/playground';
//import GridExam from '../grid/syled-grid-ex';
//import { Grid, Cell } from 'styled-css-grid';
//import { Container, Row, Col } from 'react-grid-system';
//import GridExample from '../grid/gridExample-01';
//import ArticleCard from '../articleCard/articleCard';
import StyledSistemExample from '../grid/styled-system-example';
import ArticleCardList from '../articleCard/ArticleCardList';


const App = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" width="200" />
    {/* <Row>
      <Col xs={6} md={3} lg={4}>
        <ArticleCard />
      </Col>
    </Row>
    <GridExample /> */}
    {/* <GridExam /> */}

    <StyledSistemExample />

    <ArticleCardList />

    <PlayGround />
    <TestForm title="Enviar mensaje" />
    <PlusMinusComp boxTitleText='Mas o menos' />

  </div>
);


export default App;
