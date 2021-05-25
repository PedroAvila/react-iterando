
import React, { Component } from 'react'

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
        (Hermanos)
      </div>
      <div style={ subtitleStyles }>
        Parent Component
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

const blueStyle = {
  ...boxStyle,
  border: "1px solid blue"
}

const redStyle = {
  ...boxStyle,
  border: "1px solid red"
}

class ComponentA extends Component {
  render() {
    const { num } = this.props
    return(
      <div style={ blueStyle }> 
        <button onClick={ this.props.onAdd }>
          Component A ({ num })
        </button>
      </div>
    )
  }
} 

class ComponentB extends Component {
  render() {
    const { num } = this.props
    return(
      <div style={ redStyle }> 
        <button onClick={ this.props.onAdd }>
          Component B ({ num })
        </button>
      </div>
    )
  }
}

class App extends Component {

  state = {
    countA: 0,
    countB: 0
  }

  handleAddA = () => {
    this.setState(state =>({
      countA: state.countA + 1
    }))
  }

  handleAddB = () => {
    this.setState(state =>({
      countB: state.countB + 2
    }))
  }

  handleClick = (e) => {
    console.log("Click en <Padre /> ", e.saludo)
  }

  render() {
    
    const { countA, countB } = this.state

    return (
      <div 
        style={ boxStyle }
      >
        <Header />
        <ComponentA 
          num={ countA }
          onAdd={ this.handleAddB }
        />
        <ComponentB 
          num={ countB }
          onAdd={ this.handleAddA }
        />
      </div>
    )
  }
}

export default App;
