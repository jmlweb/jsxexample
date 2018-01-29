import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  margin:0 auto;
  max-width: 95%;
  @media (min-width: 992px) { 
    max-width: 862px; 
  }
  @media (min-width: 1140px) { 
    max-width: 1110px; 
  }
  @media (min-width: 1440px) { 
    max-width: 1410px; 
  }
`;

const Row = styled.div` 
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;


`;

const Brick = styled.div` 
  height: 100%;
  width:  100%;
  background: #333;
  color:#fff;
  padding:55px 0;
`;

const MyGrid = () => (
  <Container>
    <Row>
      <Brick>Content into CONTAINER</Brick>
    </Row>
  </Container>
);

export default MyGrid;