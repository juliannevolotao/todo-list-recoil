import {Head, Input, Button} from './style';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { darkThemeState, todoListState } from '../../recoil/atoms';

export default function TodoHeader() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const darkTheme = useRecoilValue(darkThemeState);
  let id = 0;
  
  const getId = () => {
    return id++;
  }
  
  const handleAddItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        checked: false,
      }
    ]);
    setInputValue('');
  }
  
  
  
  return (
    <Head>
      <Input darkMode={darkTheme} 
        placeholder="Preciso fazer..." 
        onChange={(e) => setInputValue(e.target.value)} 
        value={inputValue}
        type="text" />
      <Button onClick={() => handleAddItem()} darkMode={darkTheme} > + </Button>
    </Head> 
  )
}