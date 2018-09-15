import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css'

function Category(props){
  return(
    <div className="Category">
      <p className="Category-title">{ props.title } </p>
      <h2 className="Category-description">{ props.description }</h2>
      <div>
        { <Playlist
          playlist={ props.playlist }
          handleOpenModal={ props.handleOpenModal }
        />
      }
    </div>
  </div>
  )
}

export default Category
