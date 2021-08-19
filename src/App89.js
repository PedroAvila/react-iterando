
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// { Provider, Consumer }
const { Provider, Consumer } = React.createContext()


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
        React API Context
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

const Nieto = () => (
  <Consumer>
    { ( { addClicks, clicks })=> (
      <div style={boxStyle}>
        <p>Nieto</p>
        <button onClick={addClicks}>
          Disparar ({clicks})
            </button>
      </div>
    )}
  </Consumer>
)

class Hijo extends Component {
  render() {
    return(
      <div style={ boxStyle }>
        <p>Hijo</p>
        <Nieto />
      </div>
    )
  }
}






class App extends Component {

  state = {
    clicks: 0 
  }

  addClicks = () => {
    this.setState(state=> ({
      clicks: state.clicks + 1
    }))
  }

  render() {

    return (
      <Provider value={{ 
        clicks: this.state.clicks,
        addClicks: this.addClicks
       }}>
        <div style={ boxStyle }>
          <Header />
          <Hijo />
        </div>
      </Provider>
    )
  }
}

export default App;
