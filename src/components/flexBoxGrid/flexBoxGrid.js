import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';


const Brick = styled.div`
  border:#333 1px solid;
  margin-bottom:4px;
`;

const FlexBoxGrid = () => (
  <Grid fluid>
    <Row>
      {
        [...Array(8)].map((_obj, idx) => (
          <Col xs={6} md={3} xs={6}>
            <Brick>
              <h1>FlexBox GRID</h1>
            </Brick>
          </Col>
        ))
      }
    </Row>
  </Grid >
);

export default FlexBoxGrid;