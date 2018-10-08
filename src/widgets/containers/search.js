import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import  { bindActionCreators } from 'redux';


class SearchContainer extends Component {

  state = {
    value: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.input.value, 'submit')
    this.props.actions.searchEntities(this.input.value);

  }

  setInputRef = elem => {
    this.input = elem
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value,
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



function mapDispatchToProps ( dispatch ) {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null,mapDispatchToProps)(SearchContainer)
