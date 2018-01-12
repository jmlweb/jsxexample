import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
}) `
  margin: 20px 0;
`;

const CheckBox = ({ text }) => <Label><Input /> {text}</Label>

export default CheckBox;
