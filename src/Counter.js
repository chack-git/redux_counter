import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions  from './ducks/actions'


class Counter extends Component {
  state = {
    counter: 0,
    posts: ['one']
  }
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {
    return (
      <div>
        <div className="App">
          <button onClick={() => this.props.increase(1)}>Increase</button>
          <button onClick={() => this.props.increase(10)}>Increase by 10</button>
          {this.props.count}
          <button onClick={this.props.decrease}>Decrease</button>
          <button onClick={this.props.load}>Load posts</button>
        </div>
        <div>
        {console.log(actions)}
           {this.props.posts.map(post => {
              return (
                  <span key={post.id}>{post.title}</span>
              )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        count: state.uiReducer.counter,
        posts: state.uiReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrease: () => actions.decrease(dispatch),
        increase: (n) => actions.increase(dispatch, n),
        load: () => actions.load(dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);
