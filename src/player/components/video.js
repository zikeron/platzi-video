import React, { Component } from 'react'
import './video.css'

export default class Video extends Component {


  togglePlay(){
    if(this.props.pause){
      this.video.play()
    }else{
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.pause !== this.props.pause){
      this.togglePlay();
    }
  }

  setRef = elem =>{
    this.video = elem
  }

  render(){
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props
    return(
      <div className="Video">
        <video
          src={ this.props.src }
          autoPlay={ this.props.autoPlay }
          ref={ this.setRef }
          onLoadedMetadata={ handleLoadedMetadata }
          onTimeUpdate={ handleTimeUpdate }
          onSeeking={ handleSeeking }
          onSeeked={ handleSeeked }
        />
      </div>
    )
  }
}
