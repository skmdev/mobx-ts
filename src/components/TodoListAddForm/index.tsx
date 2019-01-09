import React from 'react';
import { inject } from 'mobx-react';
import { IStore } from '../../stores';

interface IProps extends IStore {
  onSubmit: (name: string) => void;
}

@inject('todoList')
class TodoListAddForm extends React.PureComponent<IProps> {
  state = {
    todoName: '',
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todoName: e.target.value });
  };

  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.todoName);
    this.setState({
      todoName: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          placeholder="add todo"
          value={this.state.todoName}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default TodoListAddForm;
