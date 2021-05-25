
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

const Header = () => {
  const subtitleStyles = {
    fontWeight: "bold"
  }
  const headerStyle = {
    margin: "0.6em",
    borderRadius: "0.3em",
    border: "1px solid #d2d2d2",
    padding: "2em 0.4em",
    fontFamily: "monospace",
    fontSize: "17px"
  }

  return(
    <header style={ headerStyle }>
      <div>
        (Cualquiera)
      </div>
      <div style={ subtitleStyles }>
        Observer Pattern
        <span role="img" aria="flame">
          🔥 
        </span>
      </div>
    </header>
  )
}

const boxStyle = {
  padding: "0.5em",
  margin: "0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center"
}

/* const blueStyle = {
  ...boxStyle,
  border: "1px solid blue"
}

const redStyle = {
  ...boxStyle,
  border: "1px solid red"
} */

class Hijo extends Component {
  render() {
    return(
      <div style={ boxStyle }>
        <Nieto onDispatch={ this.props.onDispatch } />
      </div>
    )
  }
}

class Bisnieto extends Component {

  state = {
    message: "✡ ✡ ✡ "
  }

  componentDidMount() {
    PubSub.subscribe("otro evento", (e, data)=>{
      this.setState({
        message: data.title
      })
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe("otro evento")
  }

  handleClick = () => {
    PubSub.publish("saludo", "Hola desde el Bisnieto")
  }

  render() {
    return(
      <div style={ boxStyle }>
        <p>{ this.state.message }</p>
        <button onClick={ this.handleClick }>
          NIETO
        </button>
      </div>
    )
  }
}

class Nieto extends Component {
  render() {
    return(
      <div style={ boxStyle }>
        <Bisnieto onDispatch={ this.props.onDispatch } />
      </div>
    )
  }
}



class App extends Component {

  componentDidMount() {
    PubSub.subscribe("saludo", (e, data)=>{
      alert(data)
    })
  }

  handleClick = () => {
    PubSub.publish("otro evento", {
      title: "Hola desde <App />"
    })
  }

  render() {

    return (
      <div style={ boxStyle }>
        <button onClick={ this.handleClick }>
          PADRE
        </button>
        <Header />
        <Hijo onDispatch={ this.handleClick } />
      </div>
    )
  }
}

export default App;
