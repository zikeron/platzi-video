import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import './volume.css'

const Volume = (props) => (
      <button className="Volume" >
        <div onClick={ props.handleClick }>
          {
            props.mute ?
            <VolumeIcon
              color="red"
              size={25}
            />
            :
            <VolumeIcon
              color="white"
              size={25}
            />

          }
        </div>
        <div className="Volume-range">
          <input
            type="range"
            min={ 0 }
            max={ 1 }
            step={ .05 }
            onChange={ props.handleVolumeChange }
            value={ props.value }
          />
        </div>
      </button>
)
export default Volume
