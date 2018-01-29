import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-grid-system';

const Brick = styled.div`
	background: #000;
	color: #fff;

	img {
		width: 100%;
		height: 100%;
		max-width: 250px;
		max-height: 250px;
	}
`;

const GridExample = () => (
  <Container fluid>
    <Row nogutter>
      <Col sm={3} md={4} lg={6}>
        <Brick>
          Div 1
					<img src="http://via.placeholder.com/250x250" alt="" />
        </Brick>
      </Col>
      <Col sm={6} md={4} lg={6} align="end" debug>
        <Brick>
          Center
				</Brick>
      </Col>
      <Col sm={3} md={4} lg={12} debug>
        <Brick>
          Div 1
					<img src="http://via.placeholder.com/250x250" alt="" />
        </Brick>
      </Col>
    </Row>
  </Container>
);

export default GridExample; 