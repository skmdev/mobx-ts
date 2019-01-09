import { observable, action } from 'mobx';

class Todo {
  @observable public isDone: boolean = false;
  @observable public name: string;
  constructor(name: string) {
    this.name = name;
  }

  @action
  public setDone(isDone: boolean) {
    this.isDone = isDone;
  }
}

export default Todo;
