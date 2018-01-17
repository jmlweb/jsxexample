import React from 'react';
import styled from 'styled-components';

import Form from '../form/form';
//import TextArea from '../textarea/textarea';
import Button from '../button/button';
//import CheckBox from '../checkbox/checkbox';
//import Input from '../input/input';

const PlaygroundInner = styled.div`
    //background:#ebeced;
		padding:20px;
		font-family: sans-serif;
		color: #252525;
		
		h1 {
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
		<h1>Some btn_s</h1>
		<section>
			<h3>Default btn_s</h3>
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

	</PlaygroundInner>
);

//const PlayGround = ({children}) => <PlaygroundHolder>{children}</PlaygroundHolder>

export default PlayGround;