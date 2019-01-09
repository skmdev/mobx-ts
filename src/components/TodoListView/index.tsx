import React from 'react';
import { IStore } from '../../stores';
import TodoItem from '../TodoItem';
import TodoListAddForm from '../TodoListAddForm';
import TodoList from '../../containers/TodoListContainer';

interface IProps extends IStore {}

class TodoListView extends React.Component<IProps> {
  handleFormSubmit = (name: string) => {
    this.props.todoList!.addTodo(name);
  };
  render() {
    return (
      <div>
        <TodoListAddForm onSubmit={this.handleFormSubmit} />
        <button onClick={() => this.props.todoList!.fetchTodo()}>
          Fetch todo
        </button>
        <div>Completed Task: {this.props.todoList!.completedCount}</div>
        <TodoList />
      </div>
    );
  }
}
export default TodoListView;
