import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//Component to display favorite icon, which is empty or filled depending if like is toggled
function PhotoFavButton(props) {

  const { liked, toggleLike } = props;
 
  return (
    <div className={"photo-list__fav-icon"} onClick={toggleLike}>
      <div className={"photo-list__fav-icon-svg"}>
      <FavIcon selected={liked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;