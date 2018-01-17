import React from 'react';

//import styled from 'styled-components';
import Button from '../button/button';
//import Button from '../button/btnPlusMinus';
import Input from '../input/input';

import PlusMinusHolder from '../plusMinus/styleCss';

const PlusMinusBtn = Button.extend`
	color:#000;
	render() { 
		return <div className='oops' />;
	}
`;

const PlusMinusComp = ({ boxTitleText = 'Sin título' }) => (

	<PlusMinusHolder>
		<boxTitle>
			{boxTitleText}
			<a href="../">Loreim Ipsum</a>
		</boxTitle>
		<PlusMinusBtn>-</PlusMinusBtn>
		<Input placeholder="1" />
		<PlusMinusBtn>+</PlusMinusBtn>
	</PlusMinusHolder>

);

export default PlusMinusComp;