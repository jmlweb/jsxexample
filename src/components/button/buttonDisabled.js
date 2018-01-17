import React from 'react';
//import styled from 'styled-components';
import styledMap from 'styled-map';
import { darken, lighten } from 'polished';
import { setLightness } from 'polished';


import Button from '../button/button';
import { colorPrimary, colorSuccess, colorDanger, colorGrey } from '../../constants/colors';

const hoverDarkColor = color => darken(0.15, color);

const ButtonDisabled = Button.extend`
	cursor: not-allowed;
	opacity: 0.75;

	&:hover {
	background: ${styledMap({
		primary: (colorPrimary),
		success: (colorSuccess),
		danger: (colorDanger),
		secondary: setLightness(0.9, (colorGrey)),
		disabled: setLightness(0.75, (colorGrey)),
		default: (colorPrimary),
	})};
	}
	
`;

export default ButtonDisabled;