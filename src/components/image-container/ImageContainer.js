import React from 'react';
const ImageContainer = (props) => {
  let className = (props.className) ? `tg-image-container ${props.className}` : 'tg-image-container';
  return (
    <div className={className}>
      {!props.src && <span>No Picture Available</span>}
      {props.src && <img src={props.src} alt={props.alt} />}
      
    </div>
  )
}

export default ImageContainer;