import styled from 'styled-components';
import { colors } from '../../../styles/variables';

const TextContainer = styled.div`
  position: absolute;
  bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 200px;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  
  svg {
    color: ${colors.branco};
    height: 18px;
    width: 18px;
  }
  
  span {
    color: ${colors.branco};
    font-size: 12px;
  }
`

export {TextContainer, ItemBox};