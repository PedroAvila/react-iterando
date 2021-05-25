
import React, { Component } from 'react'



class App extends Component {

  state = {
    num: 0
  }

  shouldComponentUpdate(nextProps, nextState){

    if (nextState.num <= 5) {
      return true
    }
    return false
  }

  add = () => {
    this.setState(state => ({
      num: state.num + 1
    }))
  }
  
  render() {
    
    return (
      <div>
        <h3>shouldComponentUpdate</h3>
        <button onClick={ this.add }>
          Clicks ({ this.state.num })
        </button>
      </div>
    )
  }
}

export default App;
