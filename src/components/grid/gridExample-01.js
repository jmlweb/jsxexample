import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-grid-system';

const Brick = styled.div`
	background: #000;
	color: #fff;
`;

const GridExample = () => (
	<Container fluid>
		<Row nogutter>
			<Col sm={3}>
				<Brick>
					Div LEFT
				</Brick>
			</Col>
			<Col sm={6} align="end" debug>
				CENTER
			</Col>
			<Col sm={3} debug>
				Div Right
			</Col>
		</Row>
	</Container>
);

export default GridExample; 