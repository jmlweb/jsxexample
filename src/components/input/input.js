import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';

const Input = styled.input`
    display: block;
    width: 75%;
    font-size: 13px;
    line-height: 1.5;
    color: #55595c;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    margin-bottom:5px; 
    background-color: #fff;
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