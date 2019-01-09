import React from 'react';
import { Provider } from 'mobx-react';
import { initalStore } from './stores';
import TodoListView from './containers/TodoListContainer';

import './index.css';

const store = initalStore();

class App extends React.PureComponent {
  render() {
    return (
      <Provider {...store}>
        <div id="app">
          <TodoListView />
        </div>
      </Provider>
    );
  }
}

export default App;
