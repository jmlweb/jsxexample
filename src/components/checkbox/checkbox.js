import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: italic;
  font-size: 12px;
`;

const SubText = styled.p`
  font-size:8px;
  color:red;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
}) `
  margin: 20px 0;
  outline: #3e3e3e 3px solid;
`;

const CheckBox = ({ children }) => <Label><Input />{children}</Label>

export default CheckBox;
