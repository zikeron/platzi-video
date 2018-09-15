import React from 'react'
import Play from '../../icons/components/play'
import Pausa from '../../icons/components/pause'
import './play-pause.css'

const PlayPause = props =>(

  <div className="PlayPause">
    {
      props.pause ?
      <button onClick={ props.handleClick }>
        <Play
        size={25}
        color='white'
      />
      </button>
      :
      <button onClick={ props.handleClick }>
        <Pausa
          size={25}
          color='white'
         />
      </button>
    }
  </div>
)
export default PlayPause
