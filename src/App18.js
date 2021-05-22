
import React, { Component } from 'react'


class Contador extends Component {

  /* constructor(props) {
    super(props)

    this.agregar = this.agregar.bind(this)
  
  } */

  state = {
    num: this.props.num
  }

  title = React.createRef()
  
  agregar = () => {
    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render() {

    return (
      <div>
        <h2
          ref={ this.title }
        >
          { this.state.message }
        </h2>
        <button onClick={ this.agregar }>
          Click ({ this.state.num })
        </button>
      </div>
    )
  }
}


class App extends Component {

  

  render() {

    return (
      <div>
        <h1>Métodos constructor</h1>
        <Contador num={ 1200 } />
        <Contador num={ 20 } />
      </div>
    )
  }
}

export default App;
