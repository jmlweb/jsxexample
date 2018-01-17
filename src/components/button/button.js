
import styled from 'styled-components';
import styledMap from 'styled-map';
import { darken } from 'polished';
import { setLightness } from 'polished';

import { colorPrimary, colorSuccess, colorDanger, colorGrey } from '../../constants/colors';
//import styleCss from '../plusMinus/styleCss';

const hoverColor = color => darken(0.15, color);

const Button = styled.button`
	border: 1px solid transparent;
	border-radius:3px;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle; 
	transition: all .2s ease-in-out; 
	margin:5px 5px 5px 0;

	padding: ${styledMap({
		lg: '12.5px 20px',
		sm: '7px 12px',
		default: '9.5px 16px',
	})};

	cursor :${styledMap({
		disabled: 'not-allowed',
		default: 'pointer',
	})};

  background: ${styledMap({
		primary: (colorPrimary),
		success: (colorSuccess),
		danger: (colorDanger),
		secondary: setLightness(0.9, (colorGrey)),
		disabled: '#888',
		default: '#85786f',
	})};

  font-size: ${styledMap({
		lg: '16px',
		sm: '13px',
		default: '14px',
	})};

	color: ${styledMap({
		secondary: '#444',
		default: '#fff',
	})}; 
	
  &:hover {
	transition: all .2s ease-in-out;
	background: ${styledMap({
		primary: hoverColor(colorPrimary),
		success: hoverColor(colorSuccess),
		danger: hoverColor(colorDanger),
		default: '#85786f',
	})};
	}
	
`;

// no extends...
// const PlusMinusBtn = Button.extend`
// 	color:#000;
// `;

export default Button;

