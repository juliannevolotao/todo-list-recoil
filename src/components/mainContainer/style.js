import styled from 'styled-components';
import { colors } from '../../../styles/variables';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.darkMode ? `${colors.preto}` : `linear-gradient(to right, #C5309D, #9136C7, #6E3ADF)`};
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
`;

export {Container}