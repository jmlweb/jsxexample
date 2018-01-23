import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import ArticleCard from '../articleCard/ArticleCard';

const ArticleCardListWrapper = styled.div`
  background: #ebeced;
  padding: 10px;
`;


// gap="8px" -- pordefecto

const ArticleCardList = () => (

  <ArticleCardListWrapper>
    <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" minRowHeight="45px" className="oops">

      {
        [...Array(8)].map((_obj, id) => (
          <Cell key={id}>
            <ArticleCard />
          </Cell>
        ))
      }

    </Grid >
  </ArticleCardListWrapper>

);

export default ArticleCardList;