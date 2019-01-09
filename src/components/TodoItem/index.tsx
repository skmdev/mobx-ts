import React from 'react';

interface IProps {
  onDoneClick: () => void;
  onDeleteClick: () => void;
  name: string;
  isDone: boolean;
}

class TodoItem extends React.PureComponent<IProps> {
  render() {
    return (
      <div>
        <label>
          <input
            onChange={this.props.onDoneClick}
            type="checkbox"
            name="done"
            defaultChecked={this.props.isDone}
          />
          done?
        </label>

        {this.props.name}
        <button onClick={this.props.onDeleteClick}>delete</button>
      </div>
    );
  }
}

export default TodoItem;
