import React from 'react'
import './search.css'

const Search = props => (
  <form action=""
    className="Search"
    onSubmit={ props.handleSubmit }
  >
    <input
      ref={ props.setRef }
      type="text"
      placeholder="Buscar"
      className="Search-input"
      name="search"
      onChange={ props.handleChange }
      value={ props.value }
      // defaultValue = atributo value en html
    />
  </form>
)

export default Search
