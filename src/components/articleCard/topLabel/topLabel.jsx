import React from 'react';
import styled from 'styled-components';
import { colorPrimary, colorSuccess, colorDanger, colorGrey } from '../../../constants/colors';


const TopLabelItem = styled.div`
	display: inline-block;
	border-radius:12px;
	line-height: 1;
	font-family: sans-serif;
	font-size: 11px;
	text-transform: uppercase;
	padding:4px 7px;
	background: ${props => props.default ? colorSuccess : colorPrimary};
	color: #fff;
`;

const TopLabel = props => (
	<TopLabelItem default={props.default}>
		{props.children}
	</TopLabelItem>
);

export default TopLabel;