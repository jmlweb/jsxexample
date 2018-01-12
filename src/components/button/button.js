import styled from 'styled-components';
import styledMap from 'styled-map';
import { darken } from 'polished';

import { primary, success, danger } from '../../constants/colors';

const hoverColor = color => darken(0.3, color);

const Button = styled.button`
  background: ${styledMap({
    primary,
    success,
    danger,
    default: '#85786f',
  })};
  font-size: ${styledMap({
    lg: '22px',
    sm: '10px',
    default: '14px',
  })};
  color: #fff;
  &:hover {
    background: ${styledMap({
      primary: hoverColor(primary),
      success: hoverColor(success),
      danger: hoverColor(danger),
      default: '#85786f',
    })};
  }
`;

export default Button;
