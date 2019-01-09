import { inject, observer } from 'mobx-react';
import TodoList from '../../components/TodoList';

export default inject('todoList')(observer(TodoList));
