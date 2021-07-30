import {ListItem, ListContainer, ItemActionIcons, ItemTextContainer, ItemIcon} from './style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, darkThemeState } from '../../recoil/atoms';
import SquareIcon from '../../assets/svgs/square';
import CheckIcon from '../../assets/svgs/check-square';
import TrashIcon from '../../assets/svgs/trash';

export default function TodoListArea() {
  const [todoList, setTodoList ] = useRecoilState(todoListState);
  const darkTheme = useRecoilValue(darkThemeState);
  
  const replaceItemAtIndex = (arr, index, newValue) => {
    return [
      ...arr.slice(0, index), 
      newValue, 
      ...arr.slice(index + 1)];
  }
  const removeItemAtIndex = (arr, index) => {
    return [
      ...arr.slice(0, index),
      ...arr.slice(index + 1)
    ]
  }
  const handleRemoveItem = (index) => {
    const newList = removeItemAtIndex(todoList, index);
    
    setTodoList(newList);
  }
  
  const handleCheckItem = (item, index) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      checked: !item.checked
    });
    
    setTodoList(newList);
  }
  
  return (
    <ListContainer>
      {todoList.map((todo, index) => (
        <ListItem darkMode={darkTheme} key={todo.id}> 
          <ItemTextContainer darkMode={darkTheme}> <span> {todo.text} </span> </ItemTextContainer>
          <ItemActionIcons> 
            <ItemIcon darkMode={darkTheme} onClick={() => handleCheckItem(todo, index)} > {todo.checked ? CheckIcon() : SquareIcon()} </ItemIcon> 
            <ItemIcon darkMode={darkTheme} onClick={() => handleRemoveItem(index)}> {TrashIcon()} </ItemIcon> 
          </ItemActionIcons>
        </ListItem>
      ))}
    </ListContainer>
  )
}