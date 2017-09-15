import React, { Component } from 'react'

class Input extends Component {
  
  state = {
    valor: ''
  }
  
  handleChange  = (e) => {
    this.setState({valor: e.target.value})
  }

  handleKeyPress = (e) => {
    
    const {addItem} = this.props
    const {valor} = this.state
    if(e.key === 'Enter'){
      if(valor === '') return 
      
      addItem(valor, '1.99')
      e.target.value=''    
    } 
  }

  render() {
    
    return (
      <div>
      <input 
        type="text" 
        placeholder="digite o nome do produto"
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
      
      </div>
    )
  }
}

export default Input