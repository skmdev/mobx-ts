import React from 'react';
import './index.css';
interface IProps {
  onDoneClick: () => void;
  onDeleteClick: () => void;
  todo: {
    name: string;
    isCompleted: boolean;
  };
}

class TodoItem extends React.PureComponent<IProps> {
  render() {
    return (
      <div className="todo-item">
        <label>
          <input
            onChange={this.props.onDoneClick}
            type="checkbox"
            name="done"
            defaultChecked={this.props.todo.isCompleted}
          />
          Completed?
        </label>

        {this.props.todo.name}
        <button onClick={this.props.onDeleteClick}>delete</button>
      </div>
    );
  }
}

export default TodoItem;
