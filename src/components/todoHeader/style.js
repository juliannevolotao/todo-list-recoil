import styled from 'styled-components';
import { colors } from '../../../styles/variables';

const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: calc(100% - 80px);
  height: 50px;
  border-radius: 60px;
  padding: 0 30px;
  transition: all .3s;
  background-color: ${props => props.darkMode ? colors.roxo : colors.branco};
  color: ${props => props.darkMode ? colors.branco : colors.cinza};
  
  &::placeholder {
    color: ${props => props.darkMode ? colors.branco : colors.cinza};
  }
  
  border: none;
  font-size: 18px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  outline: none;
`

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: ${props => props.darkMode ? colors.roxo : colors.branco};
  color: ${props => props.darkMode ? colors.branco : colors.cinza};
  border: none;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  font-size: 40px;
  transition: all .3s;
  cursor: pointer;
  outline: none;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export { Head, Input, Button }