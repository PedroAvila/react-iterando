import React, { Component } from 'react'


class App extends Component {

  state = {
    products: [
      {
        id: 1,
        name: "camisa unicornio",
        colors: [ "#467367", "#05fd88", "#a706ee" ],
        price: 20
      },
      {
        id: 2,
        name: "jeans",
        colors: [ "#D35EFF", "#9956E8", "#876BFF" ],
        price: 32
      },
      {
        id: 3,
        name: "taza",
        colors: [ "#467367", "#05fd88", "#a706ee" ],
        price: 20
      },
      {
        id: 4,
        name: "camisa icream",
        colors: [ "#467367", "#05fd88", "#a706ee" ],
        price: 20
      },
      {
        id: 5,
        name: "camisa dragon",
        colors: [ "#467367", "#05fd88", "#a706ee" ],
        price: 20
      }
    ]
  }

  render () {
    return(
      <div>
        <h3>Iterando listas de objetos</h3>

        <div>
          { this.state.products.map((product) => (
              <div>
                $ { product.price } - { product.name }

                <div>
                  { product.colors.map((color) => {
                      return(
                        <span
                          style={{
                            width: "13px",
                            height: "13px",
                            borderRadius: "0.1em",
                            border: "1px solid gray",
                            display: "inline-block",
                            margin: "0.1em",
                            background: color
                          }}
                        ></span>
                      )
                  })}
                </div>
              </div>
            )) }
        </div>
      </div>
    )
  }
}

export default App;
