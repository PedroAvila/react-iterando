
import React, { Component } from 'react'



class App extends Component {

  state= {
    tech: "Vue"
  }

  handleChange = (event) => {
    this.setState({
      tech: event.target.value
    })
  }

  render() {

    return (
      <div>
        <h1>
          Etiqueta Select 
          { this.state.tech }
        </h1>
        <form>
          <select value={ this.state.tech } onChange={ this.handleChange }>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App;
