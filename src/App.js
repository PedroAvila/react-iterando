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
            ( Hijo - Padre )
          </div>
          <div style={ subtitleStyles }>
            HOC High Order Component
            <span role="img" aria="flame">
              🔥 
            </span>
          </div>
        </header>
      )
}

const boxStyles = {
    padding: "0.5em",
    margin: "0.5em",
    border: "1px solid gray",
    borderRadius: "0.3em",
    textAlign: "center"
}

// HOC
const withCounter = (Com) => {
    return class extends Component {

        state = {
            num: 0
        }

        add = () => {
            this.setState(state => ({
                num: state.num + 1
            }))
        }

        render () {
            return (
                <Com 
                    num={this.state.num}
                    add={this.add}
                />
            )
        }
    }
}

class App extends Component {
    render() {
        const { num, add } = this.props
        console.log(this.props)
        return (
            <div style = { boxStyles }>
                <Header />
                <h1>{ num }</h1>
                <button onClick={ add }>
                    ADD
                </button>
            </div>
        )
    }
}

export default withCounter(App) 