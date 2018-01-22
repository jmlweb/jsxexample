import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

const Brick = styled.div`
	background: ${props => props.default ? '#333' : '#f00'};
	color: #fff;
	position: relative;
	display:flex;
	flex-direction: column;
	padding: 15px;
	font-family:sans-serif;
	font-size:13px;
	line-height:15px;

	.loops & {
		color: #ff0;
	}

	img { 
		width: 100%;
		height: 100%;
		max-width:250px;
		max-height: 250px;
		margin: auto; 
	}
	
`;

// gap="8px" -- pordefecto

const GridExam = () => (
	<article>
		<Grid columns="repeat(auto-fit, minmax(200px, 1fr))" minRowHeight="45px" className="oops">
			<Cell className="loops">
				<Brick default>
					<p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a
						pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Nulla quis lorem ut
						libero malesuada feugiat.</p>
					<img src="http://via.placeholder.com/250x250" alt="" />
				</Brick>
			</Cell>
			<Cell>
				<Brick>
					<p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a
				pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Nulla quis lorem ut
				libero malesuada feugiat.</p>
					<img src="http://via.placeholder.com/250x250" alt="" />
				</Brick>
			</Cell>

			{
				[...Array(8)].map(() => (
					<Cell>
						<Brick default>
							<p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a
						pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Nulla quis lorem ut
						libero malesuada feugiat.</p>
							<img src="http://via.placeholder.com/250x250" alt="" />
						</Brick>
					</Cell>
				))
			}

		</Grid >


	</article >
);

export default GridExam;