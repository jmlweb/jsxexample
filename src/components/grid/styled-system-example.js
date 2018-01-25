import React from 'react';
import styled from 'styled-components';
import { space, width, fontSize, alignItems, flex, flexWrap, textAlign } from 'styled-system';

const StyledSistemExampleGrid = styled.div`
    display: flex;
    ${width}
    ${fontSize}
    ${flex}
`;

const BrickHolder = styled.div`
    ${width}
    border:#888 1px solid;
`;

const Brick = styled.div`
    background: #f2f2f2;
    /* height: 100px; */
`;

const StyledSistemExample = () => (

  <StyledSistemExampleGrid flex="1">
    {
      [...Array(4)].map((_obj, idx) => (
        <BrickHolder align='center'
          width={[1 / 2, 1 / 3, 1 / 4]}
          key={idx}
          m={[2]}
          p={[2]}>
          <Brick>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat.
              Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.
              Donec sollicitudin molestie malesuada.</p>
          </Brick>
        </BrickHolder>
      ))
    }

  </StyledSistemExampleGrid >

);


export default StyledSistemExample;
