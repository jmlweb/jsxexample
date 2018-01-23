import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const ProductPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family:sans-serif;
`;

const ProductPriceMain = styled.div`
    display: block;
`;

const ProductPriceOld = styled.span`
    display: block;
`;

const ProductPriceDescount = styled.div`
  background: #f00; 
  color:#fff;
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

    const diference = productPriceMain - productPriceOld;

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



