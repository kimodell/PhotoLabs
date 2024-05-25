import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//Component to display favorite icon, which is empty or filled depending if like is toggled
function PhotoFavButton({likedPhotos, toggleLike, photoId}) {


const isLiked = likedPhotos.includes(photoId);
 
  return (
    <div className={"photo-list__fav-icon"} onClick={() => toggleLike(photoId)}>
      <div className={"photo-list__fav-icon-svg"}>
      <FavIcon selected={isLiked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;