import React from 'react';
import styled from 'styled-components';

const ProductImgWrapper = styled.div`
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

const ProductImg = ({ ImgUrl = 'URl' }) => (
  <ProductImgWrapper>
    <img src="{ ImgUrl }" alt="" />
  </ProductImgWrapper>
);

export default ProductImg;