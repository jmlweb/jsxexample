import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';

const Row = styled.div`
  display:${styledMap({
    noFlex: 'inherit',
    default: 'flex',
  })};
  justify-content:${styledMap({
    justifyStart: 'flex-start',
    justifyCenter: 'center',
    default: 'space-between',
  })};
  flex-wrap: wrap;
  margin:${styledMap({
    nomargin: '0',
    default: '0 -8px 0 -8px',
  })};
`;

export default Row;