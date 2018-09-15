import React from 'react';
import Category from './category';
import './categories.css'
import Search from '../../widgets/containers/search'


function Categories(props) {
  return(
    <div className="Categories">
      <Search />
      {
        props.categories.map(item=>
          <Category { ...item }
            key={ item.id }
            handleOpenModal={ props.handleOpenModal }
          />
        )
      }
    </div>
  )
}

export default Categories
