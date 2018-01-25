import React from 'react';
import styled from 'styled-components';

const ProductNameTxt = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-size:13px;
  color: #888;
  margin-bottom: 8px;
`;

const ProductName = ({ productNameValue = 'Nombre' }) => (

  <ProductNameTxt>
    {productNameValue}
  </ProductNameTxt>

);

export default ProductName;