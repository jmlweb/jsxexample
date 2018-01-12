import styled from 'styled-components';
import styledMap from 'styled-map';

const Button = styled.button`
  background: ${styledMap({
    primary: '#ff4c00',
    success: '#84b84c',
    danger: '#f35a5a',
    default: '#85786f',
  })};
  color: #fff;
`;

export default Button;
