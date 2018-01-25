import React from 'react';
import styled from 'styled-components';

const StarRatingHolder = styled.div`
  display:         flex;
  justify-content: center;
  align-items:     center;
  font-family:     sans-serif;
`;

const StarsHolder = styled.div`
  color:       #FF6000;
  font-size:   18px;
  line-height: 1px;
`;

const OpinionsCount = styled.div`
  color:     #888;
  margin:    0 2px;
  font-size: 13px;
`;

const StarRating = props => {
  const {
      opinionsCount,
    } = props;

  return (
    <StarRatingHolder>
      <StarsHolder>
        ★★★★★
      </StarsHolder>
      <OpinionsCount>
        ({opinionsCount})
      </OpinionsCount>
    </StarRatingHolder>
  );
}

export default StarRating;
