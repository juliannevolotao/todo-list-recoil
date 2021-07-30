import styled from 'styled-components';
import { colors } from '../../../styles/variables';

const ListContainer = styled.div`
  height: fit-content;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-y: auto;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

const ListItem = styled.div`
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  margin-bottom: 20px;
  background-color: ${props => props.darkMode ? colors.cinza : colors.branco};
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .3s;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ItemTextContainer = styled.div`
  width: calc(100% - 100px);
  color: ${props => props.darkMode ? colors.branco : colors.preto};
`;

const ItemActionIcons = styled.ul`
  list-style: none;
  width: 180px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ItemIcon = styled.li`
  margin-right: 15px;
  width: fit-content;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .3s;
  
  &:hover {
    transform: scale(1.03);
  }
  
  svg {
    transition: all .3s;
    width: 20px;
  }
  
  &:first-of-type {
    svg {
      color: ${props => props.darkMode ? colors.branco : colors.cinza};
    }
  }
  
  &:last-of-type {
    margin-right: 0;
    
    svg {
      color: ${props => props.darkMode ? `#ff6ead` : colors.roxo};
    }
  }
`;

export {ListContainer, ListItem, ItemTextContainer, ItemActionIcons, ItemIcon}

