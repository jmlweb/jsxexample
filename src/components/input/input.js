
import styled from 'styled-components';
import styledMap from 'styled-map';
import { setLightness, animation } from 'polished';

//import { success, danger } from '../../constants/colors';

//const hasErrorColor = color => '#ff0'

const Input = styled.input` 
${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
	display: block;
	width: 75%;
	font-size: 13px;
	line-height: 1.5;
	color: #55595c;
	border:${styledMap({
		hasError: ' 1px solid #f00',
		isOk: '1px solid #65daa2',
		default: ' 1px solid #dcdcdc',
	})};
	border-radius: 3px;
	margin-bottom:5px; 
	background-color: ${styledMap({
		hasError: setLightness(0.9, '#f00'),
		isOk: setLightness(0.9, '#65daa2'),
		default: '#fff',
	})};
  	padding: ${styledMap({
		lg: '12px 12px',
		sm: '8px 12px',
		default: '4px 12px',
	})};
  font-size: ${styledMap({
		lg: '16px',
		sm: '10px',
		default: '13px',
	})};
	
`;

export default Input;