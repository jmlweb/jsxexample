import React from 'react';
import styled from 'styled-components';

const ProductPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductPriceDescount = styled.div`
  background: #f00; 
  color:#fff;
`;

const ProductPrice = ({ ProductPriceMain = 'a', ProductPriceOld = 'b', ProductPriceDescountValue = 'c' }) => (
    <ProductPriceWrapper>
        <ProductPriceMain>
            {ProductPriceMain}€
        </ProductPriceMain>
        <ProductPriceOld>
            {ProductPriceOld}€
        </ProductPriceOld>
        <ProductPriceDescount>
            {ProductPriceDescountValue}%
        </ProductPriceDescount>
    </ProductPriceWrapper>
);

export default ProductPrice;