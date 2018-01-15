import React from 'react';

import styled from 'styled-components';
import Button from '../button/button';
//import Button from '../button/btnPlusMinus';
import Input from '../input/input';

import PlusMinusHolder from '../plusMinus/styleCss';

const PlusMinusBtn = Button.extend`
	color:#000;
`;

const boxTitle = styled.p`
  font-size:8px;
  color:#fff;
`;

const PlusMinusComp = ({ boxTitle = 'Sin título' }) => (

	<PlusMinusHolder>
		<boxTitle>{boxTitle}</boxTitle>
		<PlusMinusBtn>-</PlusMinusBtn>
		<Input placeholder="1" />
		<PlusMinusBtn>+</PlusMinusBtn>
	</PlusMinusHolder>

);

export default PlusMinusComp;