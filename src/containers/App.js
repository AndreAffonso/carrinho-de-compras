import React, { Component } from 'react'
import './App.css'

//Importando Componentes
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'

class App extends Component {

  state = {
    produtos: [
      
    ],
    precos: [ ]
  }

  onAdd = (produto, preco) => {
    const {produtos, precos} = this.state
    
    // state.produtos = state.produtos.concat(produto)
    this.setState( {
      produtos: [produto, ...produtos],
      precos: [preco, ...precos]
    })

  }

  onRemove = (index) => {
    
    let {produtos, precos} = this.state

    produtos = produtos.filter( (valor, i) => i !== index )
    precos = precos.filter((valor, i) => i !== index)

    this.setState({produtos: produtos, precos: precos})

  }

  render() {
    return (
      <div className="App col-md-4 col-md-offset-4">
        <Title nome="Carrinho de compras" />
        <Input 
          addItem={this.onAdd}
        />
        
        <List 
          itens={this.state.produtos}
          precos={this.state.precos}
          removeItem={this.onRemove}
          titulo="Meu carrinho"
        />
       
      </div>
    );
  }
}

export default App
