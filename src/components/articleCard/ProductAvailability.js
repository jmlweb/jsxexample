import React from 'react';
//import PT from 'prop-types';
import styled from 'styled-components';

const AvailabilityTxt = styled.div`
  text-align:    center;
  font-family:   sans-serif;
  font-size:     12px;
  margin-bottom: 5px;
  color:         ${
  props => props.immediate ? props.theme.colors.success : props.theme.colors.primary};
`;

const ProductAvailability = props => {
  // const {
  //   // availabilityModerate,
  //   //availabilityImmediate,
  // } = props;

  return (
    <AvailabilityTxt immediate={props.immediate}>
      {props.children}
    </AvailabilityTxt>
  );

}

// ProductAvailability.propTypes = {

// };

export default ProductAvailability;