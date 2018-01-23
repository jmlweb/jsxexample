import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import TopLabel from '../articleCard/topLabel';
import ProductName from '../articleCard/ProductName';
import ProductPrice from '../articleCard/ProductPrice';

const ArticleCardWrapper = styled.div`
  background:#fff;
  position: relative;
  padding:13px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.15);
  margin:1px;
`;

const TopLabelWrapper = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ProductImg = styled.div`
  margin: 10px auto 20px auto;

  & img {
    height: 100%;
    width: 100%;
    max-height: 250px;
    max-width: 250px;
    display: block;
    margin: auto;
  }
`;

const ArticleCard = () => (

  <ArticleCardWrapper>

    <TopLabelWrapper>
      <TopLabel default>
        Promocion
      </TopLabel>
      <TopLabel>
        quedan 3 en oferta
      </TopLabel>
    </TopLabelWrapper>

    <ProductImg>
      <img src="//thumb.pccomponentes.com/w-220-220/articles/14/142348/l1.jpg" alt="" />
    </ProductImg>

    <ProductName productNameValue='Xiaomi Mi Mix 2 64GB 4G Dual Sim Negro Libre' />

    <ProductPrice productPriceMain='222' productPriceOld='240' />


  </ArticleCardWrapper >

);

export default ArticleCard;