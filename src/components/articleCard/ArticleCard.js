import React from 'react';
import styled from 'styled-components';
import logoprime from './logo-prime.svg';
//import { Grid, Cell } from 'styled-css-grid';

import TopLabel from '../articleCard/topLabel';
import ProductImg from '../articleCard/ProductImg';
import ProductName from '../articleCard/ProductName';
import ProductPrice from '../articleCard/ProductPrice';
import ProductAvailability from '../articleCard/ProductAvailability';
import StarRating from '../starRating/star-rating';

const ArticleCardWrapper = styled.div`
  background: #fff;
  position:   relative;
  padding:    13px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.15);
  /* /margin:     1px; */
`;

const TopLabelWrapper = styled.div`
  display:  block;
  position: absolute;
  top:      10px;
  left:     10px;
`;

const LogoPrimeHolder = styled.div`
  text-align: center;
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

    <ProductImg imgSrc='//thumb.pccomponentes.com/w-220-220/articles/14/142348/l1.jpg' />

    <ProductName productNameValue='Xiaomi Mi Mix 2 64GB 4G Dual Sim Negro Libre' />

    <LogoPrimeHolder>
      <img src={logoprime} width="100" alt="logo Prime" title="logo Prime" />
    </LogoPrimeHolder>

    <ProductPrice productPriceMain='499' productPriceOld='512' productPriceDescountValue='12' />

    <ProductAvailability immediate>
      Recibelo <b>mañana</b>
    </ProductAvailability>

    <StarRating opinionsCount='2' />

    <a href="#">Sos un mago</a>

  </ArticleCardWrapper >

);

export default ArticleCard;