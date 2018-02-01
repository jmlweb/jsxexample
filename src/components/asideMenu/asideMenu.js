import React from 'react';
import styled from 'styled-components';

const AsideMenuWrapper = styled.div`
  background:   #fff; 
  margin-top:   7px;
  margin-right: 7px;
`;

const AsideMenuSection = styled.div`
  background: #fff;
`;

const AsideMenuSectionTitle = styled.div`
  background:     url(//cdn.pccomponentes.com/img/iconos/panel-01-gris.svg) 100% -750% no-repeat #d4d4d4;
  padding:        14px 12px;
  font-weight:    bold;
  text-transform: uppercase;
  font-size:      14px;
`;

const AsideMenuSectionList = styled.ul`
  position:   relative;
  list-style: none;
  padding:    0 10px;
  margin:     4px 0;
`;

const AsideMenuSectionListItem = styled.li`
  position:  relative; 
  display:   block;
  font-size: 13px;
  padding:   8px 0;
  color:     #888;
`;

const AsideMenu = () => (
  <AsideMenuWrapper>
    {
      [...Array(3)].map((_obj, idx) => (

        <AsideMenuSection key={idx} >
          <AsideMenuSectionTitle>
            Loreim Ipsum
          </AsideMenuSectionTitle>
          <AsideMenuSectionList>
            <AsideMenuSectionListItem>Loreim Ipsum</AsideMenuSectionListItem>
            <AsideMenuSectionListItem>Dollore sitt amet</AsideMenuSectionListItem>
            <AsideMenuSectionListItem>Uums Trish</AsideMenuSectionListItem>
            <AsideMenuSectionListItem>Loreim Ipsum</AsideMenuSectionListItem>
            <AsideMenuSectionListItem>Dollore sitt amet</AsideMenuSectionListItem>
            <AsideMenuSectionListItem>Uums Trish</AsideMenuSectionListItem>
          </AsideMenuSectionList>
        </AsideMenuSection>
      ))
    }


  </AsideMenuWrapper>
);

export default AsideMenu;