import React from 'react'
import FullScreenIcon from '../../icons/components/fullscreen'
import './full-screen.css'

function Fullscreen(props){
    return(
      <div
        className="FullScreen"
        onClick={ props.handleFullScreen }
        >
        <FullScreenIcon
          color='white'
          size={25}
        />
      </div>
    )
  }

export default Fullscreen
