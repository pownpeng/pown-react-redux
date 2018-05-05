import React, { Component } from 'react';

import './App.css';
import { Provider } from './pown-reactredux/'
import List from './component/list'
import Listtwo from './component/item2'
import store from './store/'

class App extends Component {
  render() {
    return (
      <Provider store = {store} >
          <List />
          <Listtwo />
      </Provider>
    );
  }
}

export default App;
