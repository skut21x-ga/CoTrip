
import React from 'react';
import { Link } from "react-router-dom";
import "./MediaCard.css";
import flight from '../../assets/images/media-card-6.png';

// Function based React Component
const MediaCard = (props) => {

  // Default Class to apply to Component

  let styles = {
    backgroundImage: `url(${props.imageSrc})`,
    backgroundSize: 'cover',
  }

  return (
  
    <Link className={`MediaCard MediaCard--${props.size}`} to={props.to} style={styles}>
      <footer className='MediaCard__footer'>
        <p className='MediaCard__footer-text'>{props.footerText}</p>
      </footer>
    </Link>
  );
}

MediaCard.defaultProps = {
  size: 'medium',
  to: 'User/:userid/',
  imageSrc: flight,
  footerText: 'Posted By: --user--'
}

export default MediaCard;
