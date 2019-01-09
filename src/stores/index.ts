import { configure } from 'mobx';
import TodoList from './todo';

// Ensure every changes is done by action
configure({ enforceActions: 'always' });

let store: IStore;

export interface IStore {
  todoList?: TodoList;
}

export function initalStore() {
  if (!store) {
    store = {
      todoList: new TodoList(),
    };
  }
  return store;
}
