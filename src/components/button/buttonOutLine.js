//import React from 'react';
//import styled from 'styled-components';
import styledMap from 'styled-map';
import { darken } from 'polished';
import { setLightness } from 'polished';


import Button from '../button/button';
import { colorPrimary, colorSuccess, colorDanger, colorGrey } from '../../constants/colors';

const hoverDarkColor = color => darken(0.15, color);

const ButtonOutLine = Button.extend`
	background:none;
	background-image: none;
	background-color: transparent;

	border-color: ${styledMap({
		primary: (colorPrimary),
		success: (colorSuccess),
		danger: (colorDanger),
		secondary: setLightness(0.75, (colorGrey)),
		default: (colorPrimary),
	})};

	color: ${styledMap({
		primary: (colorPrimary),
		success: (colorSuccess),
		danger: (colorDanger),
		secondary: setLightness(0.35, (colorGrey)),
		default: (colorPrimary),
	})};

	&:hover {
	border-color: ${styledMap({
		primary: hoverDarkColor(colorPrimary),
		success: hoverDarkColor(colorSuccess),
		danger: hoverDarkColor(colorDanger),
		secondary: setLightness(0.7, (colorGrey)),
		default: (colorPrimary),
	})};

	color: ${styledMap({
		secondary: '#444',
		default: '#fff',
	})}; 

`;

export default ButtonOutLine;