import React, { Component } from 'react'

class Title extends Component {
  render() {
    const {nome} = this.props
    return (
      <h1>{nome}</h1>
    )
  }
}



export default Title