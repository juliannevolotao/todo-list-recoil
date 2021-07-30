import {Container} from './style';
import SwitchButton from '../SwitchButton';
import { useRecoilValue } from 'recoil';
import { darkThemeState } from '../../recoil/atoms';
import InfoBar from '../InfoBar';

export default function MainContainer ({children}) {
  const darkTheme = useRecoilValue(darkThemeState);
  
  return (
    <Container darkMode={darkTheme}>
      {children}
      
      <InfoBar />
      <SwitchButton />
    </Container>
  )
}