import { selector } from 'recoil';
import { todoListState } from '../atoms';

export const todoListStatsState = selector({
  key: 'todoListStatsStateKey',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalTasks = todoList.length;
    const totalChecked = todoList.filter(todo => todo.checked).length;
    const totalUnchecked = totalTasks - totalChecked;
    
    return {
      totalTasks,
      totalChecked,
      totalUnchecked
    }
  }
})