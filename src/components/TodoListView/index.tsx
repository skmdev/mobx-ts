import React from 'react';
import { IStore } from '../../stores';
import TodoItem from '../TodoItem';

interface IProps extends IStore {}

class TodoListView extends React.Component<IProps> {
  state = {
    todoName: '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todoName: e.target.value });
  };

  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.todoList!.addTodo(this.state.todoName);
    this.setState({
      todoName: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            placeholder="add todo"
            value={this.state.todoName}
            onChange={this.handleInputChange}
          />
        </form>
        {this.props.todoList!.data.map((item, index) => (
          <TodoItem
            key={item.name}
            name={item.name}
            isDone={item.isDone}
            onDeleteClick={() => {
              this.props.todoList!.deleteTodo(index);
            }}
            onDoneClick={() => {
              this.props.todoList!.toggleDone(index);
            }}
          />
        ))}
      </div>
    );
  }
}
export default TodoListView;
