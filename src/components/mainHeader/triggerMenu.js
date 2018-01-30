import React from 'react';
import styled from 'styled-components';

const TriggerIcon = styled.div`
    transition: all .1s ease-in-out;
    cursor: pointer;
    font-size:     22px;
    padding:       2px 8px;
    border-radius: 5px;
    background:    #fff;
    border:        #ccc 2px solid;
    color:         #ff6000;

    &:hover {
      transition: all .1s ease-in-out;
      background: #ccc;
      color:#fff;
    }
`;

const TriggerMenu = () => (
  <TriggerIcon>☰</TriggerIcon>
);

export default TriggerMenu;