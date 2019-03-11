import React, { Component } from 'react'
import './App.css'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import promisable from 'redux-promise'
import reducer from './ducks/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(promisable,reduxLogger)))

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App
