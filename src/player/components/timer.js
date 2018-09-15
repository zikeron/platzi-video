import React from 'react'
import './timer.css'

const Timer = props =>(
  <div className="Timer">
    <p>
      <span> { props._currentTime } / { props._duration }</span>
    </p>
  </div>
)

export default Timer
