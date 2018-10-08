import React,{ Component} from 'react';
import MediaContainer from '../containers/media';
import './playlist.css';
import data from '../../reducers/data';

function Playlist(props) {
  return(
    <div className="Playlist">
      {
        props.playlist.map( mediaId =>
          <MediaContainer 
            key={ mediaId }
            openModal={ props.handleOpenModal }
            id = { mediaId }
          />
        )
      }
    </div>
  )
}
export default Playlist;
