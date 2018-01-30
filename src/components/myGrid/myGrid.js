import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';
//import Row from '../myGrid/row';

//ToDo Variables para Gutter (8px),
// Breakpoints

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  margin:0 auto;
  max-width:${styledMap({
    flow: '100%',
    default: '95%',
  })};
  @media (min-width: 992px) { 
    max-width:${styledMap({
    flow: '100%',
    default: '862px;',
  })};
  }
  @media (min-width: 1140px) { 
    ${styledMap({
    flow: '100%',
    default: '1110px;',
  })};
  }
  @media (min-width: 1440px) { 
    ${styledMap({
    flow: '100%',
    default: '1410px;',
  })};
  }
`;

const Row = styled.div`
  display:${styledMap({
    noFlex: 'inherit',
    default: 'flex',
  })};
  justify-content:${styledMap({
    justifyStart: 'flex-start',
    justifyCenter: 'center',
    default: 'space-between',
  })};
  flex-wrap: wrap;
  margin:${styledMap({
    noMargin: '0',
    default: '0 -8px 0 -8px',
  })};
`;

const Brick = styled.div`
  height: 100px;
  width:  200px;
  background: #333;
  color:#fff;
  padding:55px 0;
  margin:0 10px 10px 0;
`;

const MyGrid = () => (
  <Container flow>
    <p>Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada.</p>
    <Row justifyStart noMargin>
      {
        [...Array(4)].map((_obj, idx) => (
          <Brick key={idx}>Content into CONTAINER</Brick>
        ))
      }

    </Row>
  </Container>
);

export default MyGrid;