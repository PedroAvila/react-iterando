
import React, { Component } from 'react'


class App extends Component {

  title = React.createRef()

  state = {
    text: "Hola"
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log(this.title.current.innerText)
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.title.current.innerText)
    console.log(snapshot)
  }

  dispatch = () => {
    this.setState({
      text: "Adios Bye!"
    })
  }

  render() {

    return (
      <div>
        <h3>getSnapShotBeforeUpdate</h3>
        <h2 ref={ this.title }>
          { this.state.text }
        </h2>
        <button onClick={ this.dispatch }>
          DISPATCH
        </button>
      </div>
    )
  }
}

export default App;
