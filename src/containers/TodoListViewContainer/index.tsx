import { inject, observer } from 'mobx-react';
import TodoListView from '../../components/TodoListView';

export default inject('todoList')(observer(TodoListView));
