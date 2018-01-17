import React from 'react';
import styled from 'styled-components';

import Form from '../form/form';
//import TextArea from '../textarea/textarea';
import Button from '../button/button';
import ButtonOutLine from '../button/buttonOutLine';
//import CheckBox from '../checkbox/checkbox';
//import Input from '../input/input';

const PlaygroundInner = styled.div`
    //background:#ebeced;
		padding:20px;
		font-family: sans-serif;
		color: #252525;
		
		h2 {
			font-weight: 100;
		}
		
		h3 {
			font-weight: 100;
		}
`;

const someTitle = styled.h2`
	color:#ff0;
`;

const PlayGround = () => (
	<PlaygroundInner>
		<h2>Btn_s</h2>
		<section>
			<h3>Small btn_s</h3>
			<Button primary sm>Btn Txt</Button>
			<Button secondary sm >Btn Txt</Button>
			<Button success sm >Btn Txt</Button>
			<Button danger sm >Btn Txt</Button>
			<Button disabled sm >Btn disabled</Button>
		</section>
		<section>
			<h3>Default btn_s</h3>
			<Button primary>Btn Txt</Button>
			<Button secondary >Btn Txt</Button>
			<Button success >Btn Txt</Button>
			<Button danger >Btn Txt</Button>
		</section>
		<section>
			<h3>Large btn_s</h3>
			<Button primary lg>Btn Txt</Button>
			<Button secondary lg >Btn Txt</Button>
			<Button success lg >Btn Txt</Button>
			<Button danger lg >Btn Txt</Button>
		</section>

		<h2>Btn_s OutLined</h2>
		<section>
			<h3>Small btn_s</h3>
			<ButtonOutLine primary sm>Btn Txt</ButtonOutLine>
			<ButtonOutLine secondary sm >Btn Txt</ButtonOutLine>
			<ButtonOutLine success sm >Btn Txt</ButtonOutLine>
			<ButtonOutLine danger sm >Btn Txt</ButtonOutLine>
		</section>
		<section>
			<h3>Default btn_s</h3>
			<ButtonOutLine primary>Btn Txt</ButtonOutLine>
			<ButtonOutLine secondary >Btn Txt</ButtonOutLine>
			<ButtonOutLine success >Btn Txt</ButtonOutLine>
			<ButtonOutLine danger >Btn Txt</ButtonOutLine>
		</section>
		<section>
			<h3>Large btn_s</h3>
			<ButtonOutLine primary lg>Btn Txt</ButtonOutLine>
			<ButtonOutLine secondary lg >Btn Txt</ButtonOutLine>
			<ButtonOutLine success lg >Btn Txt</ButtonOutLine>
			<ButtonOutLine danger lg >Btn Txt</ButtonOutLine>
		</section>

	</PlaygroundInner>
);

//const PlayGround = ({children}) => <PlaygroundHolder>{children}</PlaygroundHolder>

export default PlayGround;