import { observable, action, computed, runInAction, toJS } from 'mobx';
import axios from 'axios';
import Todo from './todo';
import { autoSave } from '../';

class TodoList {
  @observable public data: Array<Todo> = [];

  constructor() {
    this.load();
    autoSave(this, this.save);
  }

  @action
  private load() {
    const data = localStorage.getItem('data');
    if (data) {
      const dataJson = JSON.parse(data);
      this.data = dataJson.map(
        (item: any) => new Todo(item.name, item.isCompleted)
      );
    }
  }

  private save = (json: any) => {
    const { data } = json;
    localStorage.setItem('data', JSON.stringify(data));
  };

  @computed
  public get completedCount() {
    return this.data.filter((item) => item.isCompleted).length;
  }

  @action
  public async fetchTodo() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    runInAction(() => {
      for (const item of response.data) {
        this.addTodo(item.title, item.completed);
      }
    });
  }

  @action
  public addTodo(name: string, isDone: boolean = false) {
    this.data.unshift(new Todo(name, isDone));
  }

  @action
  public deleteTodo(id: string) {
    this.data = this.data.filter((item) => item.id !== id);
  }

  @action
  public toggleDone(id: string) {
    const todo = this.data.find((item) => item.id === id);
    if (todo) {
      todo.setDone(!todo.isCompleted);
    }
  }
}

export default TodoList;
