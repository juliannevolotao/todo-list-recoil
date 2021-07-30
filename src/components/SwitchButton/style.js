import styled from 'styled-components';
import {colors} from '../../../styles/variables';

const Button = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.darkMode ? colors.rosa : colors.preto};
  color: ${props => props.darkMode ? colors.preto : colors.branco};
  outline: none;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  position: absolute;
  bottom: 5%;
  right: 4%;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
  transition: all .4s;
  
  svg {
    color: ${colors.branco};
  }
  
  &:hover {
    transform: scale(1.03);
  }
`;

export { Button }