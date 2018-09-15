import React, { Component } from 'react'
import Search from '../components/search'


class SearchContainer extends Component {

  state = {
    value: 'Buscar'
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')
  }

  setInputRef = elem => {
    this.input = elem
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ','-'),
    })
  }

  render(){
    return(
      <Search
      setRef={ this.setInputRef }
      handleSubmit={ this.handleSubmit }
      handleChange={ this.handleInputChange }
      value={ this.state.value }
    />
    )
  }
}
export default SearchContainer
