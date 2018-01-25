import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const ProductPriceWrapper = styled.div`
  display:         flex;
  align-items:     center;
  justify-content: center;
  font-family:     sans-serif;
  margin-bottom:   8px;
`;

const ProductPriceMain = styled.div`
  font-size:    18px;
  font-weight:  700;
  display:      inline-block;
  color:        #444;
  margin-right: 8px;
`;

const ProductPriceOld = styled.div`
    display:         block;
    margin-right:    5px;
    text-decoration: line-through;
    color:           #aaa;
    margin-right:    8px;
`;

const ProductPriceDescount = styled.div`
  display:          inline-block;
  padding:          1px 3px;
  border-radius:    3px;
  color:            #fff;
  background-color: #f35a5a;
  vertical-align:   text-bottom;
  font-size:        13px;
`;


// props
/*
props = {
    productPriceMai,
    productPriceOld,
    productPriceDescountValue,
}
*/
const ProductPrice = props => {
  const {
    productPriceMain,
    productPriceOld,
    productPriceDescountValue,
    } = props;

  //const diference = productPriceMain - productPriceOld;

  return (
    <ProductPriceWrapper>
      <ProductPriceMain>
        {productPriceMain}€
            </ProductPriceMain>
      <ProductPriceOld>
        {productPriceOld}€
      </ProductPriceOld>
      {productPriceDescountValue !== '0'
        ? (
          <ProductPriceDescount>
            {productPriceDescountValue}%
          </ProductPriceDescount>
        )
        : undefined
      }

    </ProductPriceWrapper>
  );
}

ProductPrice.propTypes = {
  productPriceMain: PT.string.isRequired,
  productPriceOld: PT.string.isRequired,
  productPriceDescountValue: PT.string,
};

ProductPrice.defaultProps = {
  productPriceDescountValue: '0',
};

export default ProductPrice;



