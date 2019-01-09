import { observable, action, computed } from 'mobx';
import Todo from './todo';

class TodoList {
  @observable public data: Array<Todo> = [];

  constructor() {
    this.addTodo('default task');
  }

  @computed
  public get unfinishedTodoCount() {
    return this.data.filter((item) => !item.isDone).length;
  }

  @action
  public addTodo(name: string) {
    this.data.push(new Todo(name));
  }

  @action
  public deleteTodo(todoIndex: number) {
    this.data = this.data.filter((_, index) => index !== todoIndex);
  }

  @action
  public toggleDone(todoIndex: number) {
    const todo = this.data.find((_, index) => index === todoIndex);
    if (todo) {
      todo.setDone(!todo.isDone);
    }
  }
}

export default TodoList;
