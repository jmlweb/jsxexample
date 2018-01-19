import React from 'react';

import styled from 'styled-components';

const PlusMinusBox = styled.div`
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    background: #333;

    & input {
        width:100%;
        max-width : 20px;
        padding: 0 5px;
        text-align: center;
        height:30px;
    }

    & button {
        width:100%;
        max-width : 20px;

        &:last-child {
            background:#f00;
            color:#fff; 
        }
    }
`;

const BoxTitleLink = styled.a`
  font-size:8px;
  color:#fff;
  padding:10px;
`;

const PlusMinusHolder = ({ children }) => <PlusMinusBox><BoxTitleLink></BoxTitleLink>{children}</PlusMinusBox>

export default PlusMinusHolder;
