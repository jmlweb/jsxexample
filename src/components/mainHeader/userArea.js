import React from 'react';
import styled from 'styled-components';

const UserAreaContent = styled.div`
  display: flex;
  margin:0 10px;
`;

const UserAreaItemIcon = styled.div`
  font-size:     30px;
  background:    #b0f4ff;
  border-radius: 50px;
  height:        30px;
  width:         30px;
  line-height:   1;
  padding:       10px;
  color:         #fff;
  transition: all .2s ease-out 0s;
`;

const UserAreaItem = styled.div`
  display:     flex;
  align-items: center;
  margin-left: 10px;

  &:hover ${UserAreaItemIcon}{
    background:    #000;
  }

`;

const UserAreaItemTxtContent = styled.div`
  font-size:    12px;
  margin-right: 5px;
  text-align:   right;
  font-family:  sans-serif;
`;


const UserArea = () => (
  <UserAreaContent>
    {
      [...Array(3)].map((_obj, idx) => (
        <UserAreaItem middle center key={idx}>
          <UserAreaItemTxtContent>
            Loreim <br /><strong>Ipsum Uqqgz</strong>
          </UserAreaItemTxtContent>
          <UserAreaItemIcon>
            💃
          </UserAreaItemIcon>
        </UserAreaItem>
      ))
    }
  </UserAreaContent>
);

export default UserArea;