import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent
{
  constructor(props){
    super(props)
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      stAuthor: props.author
    }
  }

  // Constuctor State ECMAScript 7
  state = {
    stAuthor: this.props.author
  }

  // Hereda constructor con Arrow Function de ECMAScript 6
  handleClick = (event) => {
    this.props.openModal(this.props.id)
  }
  
  render() {
    const { title, cover, type, author } = this.props
    const { stAuthor } = this.state
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }

    return (
      <div className="Media" onClick={ this.handleClick }>
        <div className="Media-cover" >
          <img className="Media-image"
            src={ cover }
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">{ title }</h3>
          <p className="Media-author">{ stAuthor }</p>
        </div>
      </div>
    )
  }
}

// Media.propTypes = {
//   imgae: PropTypes.string,
//   //title: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   author: PropTypes.string,
//   type: PropTypes.oneOf(['video','audio']),
// }

export default Media;
