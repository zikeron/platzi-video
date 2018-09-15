import React,{ Component} from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props) {
  return(
    <div className="Playlist">
      {
        props.playlist.map( item=>
          <Media { ...item }
            key={ item.id }
            openModal={ props.handleOpenModal }
          />
        )
      }
    </div>
  )
}
export default Playlist;
