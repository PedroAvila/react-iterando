
import React, { Component } from 'react'
import faker from 'faker';

const chatStyle = {
  width: 230,
  height: 300,
  border: "1px solid gray",
  overflow: "auto",
  fontFamily: "monospace"
}

const messageStyle = {
  padding: "1em",
  borderBottom: "1px solid #DDD" 
}

const avatarStyle = {
  width: 50,
  height: 50,
  borderRadius: "50%"
}

class Chat extends Component {

  box = React.createRef()

  getSnapshotBeforeUpdate(){
    const box = this.box.current 
    if (box.scrollTop + box.offsetHeight >= box.scrollHeight) {
      return true 
    }
    return false
  }

  componentDidUpdate(prepProps, prevState, snapshot) {
    const box = this.box.current 
    if (snapshot) {
      box.scrollTop = box.scrollHeight  
    }
  }

  render() {
    return (
      <div 
        style={ chatStyle }
        ref={ this.box }
      >
        { this.props.list.map(item =>(
          <div 
            key={ item.id } 
            style={ messageStyle }
          >
            <p>{ item.message }</p>
            <div>
              { item.name }
            </div>
            <img 
              src={ item.avatar }
              alt="Avatar"
              style={ avatarStyle }
            />
            
          </div>
        )) }
      </div>
    )
  }
}


class App extends Component {


  state = {
    list: []
  }
  
  addMessage = () => {
    // Crear mensaje falso
    const message = {
      id: faker.random.uuid() ,
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      message: faker.hacker.phrase()
    }

    //console.log(message);
    // Agregarlo a la lista
    this.setState(state => ({
      list: [
        ...state.list,
        message
      ]
    }))
  }

  render() {

    return (
      <div>
        <h3>getSnapShotBeforeUpdate</h3>
        <Chat 
          list={ this.state.list }
        />
        <button onClick={ this.addMessage }>
          NEW MESSAGE
        </button>
      </div>
    )
  }
}

export default App;
