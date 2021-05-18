import React, { Component } from 'react'


class App extends Component {

  state = {
    user: {
      name: "Gerardo Gallegos",
      country: "México",
      twitter: "@luxfenix",
      youtube: "tecs.ninja"
    }
  }

  render () {
    // Destructuración
    const { user } = this.state;
    const keys = Object.keys(user)

    return(
      <div>
        <h3>Iterando propiedades de objetos</h3>
        <ul>
          { keys.map(key =>(
            <li>
              <strong>{ key } :</strong> { user[key] }
            </li>
          )) }
        </ul>
      </div>
    )
  }
}

export default App;
