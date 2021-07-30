import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListStateKey',
  default: [],
});

export const darkThemeState = atom({
  key: 'darkThemeStateKey',
  default: false,
});