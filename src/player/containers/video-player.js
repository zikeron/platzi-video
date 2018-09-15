import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layouts'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import Fullscreen from '../components/fullscreen'

class VideoPlayer extends Component{

  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    _duration: 0,
    _currentTime: 0,
    loading: false,
    lastVolume: null,
    volume: 1
  }

  togglePlay = event =>{
    this.setState({
      pause: !this.state.pause,
    })
  }
  componentDidMount(){
    this.setState({
      pause:(!this.props.autoplay)
    })
  }
  LeftPad(num) {
    const pad = '00'
    return pad.substring(0, pad.length - num.length) + num;
  }

  FormattedTime(secs){
    const mins = parseInt(secs / 60, 10)
    const sec = parseInt(secs % 60, 10)

    return `${this.LeftPad(mins.toString())} : ${this.LeftPad(sec.toString())}`
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      _duration: this.FormattedTime(this.video.duration),
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.video = event.target
    this.setState({
      _currentTime: this.FormattedTime(this.video.currentTime),
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true,
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false,
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({
      volume: this.video.volume
    })
  }

  handleVolumeToggle = event => {
    const lastValue = this.video.volume;
    this.setState ({lastValue})
    if (this.video.volume !== 0) {
      this.video.volume = 0
      this.setState ({
        volume: this.video.volume,
        mute: true
      })
    } else {
      this.video.volume = this.state.lastValue
      this.setState ({
        volume: this.video.volume,
        mute: false
      })
    }
  }

  handleFullScreen = event =>{
    if(navigator.userAgent.indexOf("Firefox") > -1){
      if(!document.mozFullScreen){
        this.player.mozRequestFullScreen()
      }else{
        document.mozCancelFullScreen()
      }
    }else{
      if(!document.webkitIsFullScreen){
        this.player.webkitRequestFullScreen()
      }else{
        document.webkitExitFullscreen()
      }
    }
  }

  setRef = elem => {
    this.player= elem
  }

  render(){
    return(
      <VideoPlayerLayout
        setRef={ this.setRef }
        >
          <Title
            title={ this.props.title }
          />
          <VideoPlayerControls>
            <PlayPause
              handleClick={ this.togglePlay }
              pause={ this.state.pause }
            />
            <Timer
              _duration={ this.state._duration }
              _currentTime={ this.state._currentTime }
            />
            <ProgressBar
              duration={ this.state.duration }
              value={ this.state.currentTime }
              handleProgressChange={ this.handleProgressChange }
            />
            <Volume
              handleVolumeChange={ this.handleVolumeChange }
              handleClick={ this.handleVolumeToggle }
              mute={ this.state.mute }
              value={ this.state.volume }
            />
            <Fullscreen
              handleFullScreen ={ this.handleFullScreen }
            />
          </VideoPlayerControls>
          <Spinner
            active={ this.state.loading }
          />
          <Video
            src={ this.props.src }
            pause={ this.state.pause }
            handleLoadedMetadata={this.handleLoadedMetadata}
            handleTimeUpdate={this.handleTimeUpdate}
            autoPlay={ this.props.autoplay }
            handleSeeking={ this.handleSeeking }
            handleSeeked={ this.handleSeeked }
          />
        </VideoPlayerLayout>
      )
    }
  }

  export default VideoPlayer
