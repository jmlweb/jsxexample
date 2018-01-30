import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';
import logo from './logo.svg';
import TriggerMenu from '../mainHeader/triggerMenu';
import SearchForm from '../mainHeader/searchForm';
import UserArea from '../mainHeader/userArea';


const MainHeaderWrapper = styled.div`
    border-top:  #ff6000 5px solid;
    box-shadow:  0 5px 11px 0 rgba(0,0,0,.25);
    display:     flex; 
    align-items: center;
    height:      100px;
`;

const LogoWrapper = styled.div`
    display:   block;
    cursor:    pointer;
    img {
      padding: 0 30px;
      width:   150px;
      height:  100%;
    }
`;



const MainHeader = () => (

  <MainHeaderWrapper>

    <LogoWrapper>
      <img src={logo} className="App-logo" alt="logo" width="200" />
    </LogoWrapper>

    <TriggerMenu />

    <SearchForm />

    <UserArea />

  </MainHeaderWrapper>

);

export default MainHeader;