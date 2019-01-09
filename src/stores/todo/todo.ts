import { observable, action } from 'mobx';
const uuidv1 = require('uuid/v1');

class Todo {
  public id: string;
  @observable public isCompleted: boolean = false;
  @observable public name: string;
  constructor(
    name: string,
    isCompleted: boolean = false,
    id: string = uuidv1()
  ) {
    this.id = id;
    this.name = name;
    this.isCompleted = isCompleted;
  }

  @action
  public setDone(isCompleted: boolean) {
    this.isCompleted = isCompleted;
  }
}

export default Todo;
