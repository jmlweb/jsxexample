import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';


const ImgHolder = styled.div`
  margin: 10px auto 20px auto;

  & img{
    height:      100%;
    width:      100%;
    max-height: 250px;
    max-width:  250px;
    display:    block;
    margin:     auto;
  }

`;

const ProductImg = props => {

  const {
    imgSrc,
    imgAlt,
    imgTitle,
  } = props;

  return (
    <ImgHolder>
      <img src="{imgSrc}" alt="{imgAlt}" title="{imgTitle}" />
      {imgSrc},
      {imgAlt},
      {imgTitle},
    </ImgHolder>
  );

};

ProductImg.propTypes = {
  imgSrc: PT.string.isRequired,
  imgAlt: PT.string,
  imgTitle: PT.string,
};

ProductImg.defautProps = {
  imgAlt: 'PcComponentes',
  imgTitle: 'PcComponentes',
};

export default ProductImg;