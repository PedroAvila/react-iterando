
import React, { Component } from 'react'

const lista = (
  <ul>
    <li>Fresa</li>
    <li>Sandía</li>
    <li>Mango</li>
    <li>Melon</li>
  </ul>
)

/* const getList = () => {
  return(
    <ul>
      <li>Fresa</li>
      <li>Sandía</li>
      <li>Mango</li>
    </ul>
  )
} */

class App extends Component {


  render() {

    return (
      <div>
        <h1>Método Render</h1>
        { lista }
      </div>
    )
  }
}

export default App;
