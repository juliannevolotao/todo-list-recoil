import { Button } from './style';
import {useRecoilState} from 'recoil';
import { darkThemeState } from '../../recoil/atoms';
import MoonIcon from '../../assets/svgs/moon'
import SunIcon from '../../assets/svgs/sun'

export default function SwitchButton() {
  const [darkTheme, setDarkTheme] = useRecoilState(darkThemeState);
  
  return (
    <>
    <Button 
      onClick={() => setDarkTheme(!darkTheme)} 
      darkMode={darkTheme}
    > 
      {darkTheme ? SunIcon() : MoonIcon()} 
    </Button>
    </>
  )
}
//  