import React from 'react';
import Category from './category';
import './categories.css'
import Search from '../../widgets/containers/search'
import Media from '../../playlist/components/media'


function Categories(props) {
  return(
    <div className="Categories">
      <Search />
      {
        props.search.map( item => 
          <Media 
            { ...item } 
            key={item.id} 
          />
        )
      }
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
