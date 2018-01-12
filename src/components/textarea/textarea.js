import styled from 'styled-components';
import { darken, placeholder } from 'polished';

const white = '#fff';

const TextArea = styled.textarea`
  background: ${white};
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px;
  &:hover {
    background: ${darken(0.3, white)};
  }
  ${placeholder({
    color: '#999',
  })};
`;

export default TextArea;
