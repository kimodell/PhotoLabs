import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  //set inital state to unclicked icon
  const [like, setLike] = useState(false);
  
  //set state to the opposite of the previous state
  const handleClick = () => {
    setLike(prevLike => !prevLike);
  };

  //change icon style if fav state= true
  const favIconClass = like ? "photo-list__fav-icon-svg" : "photo-list__fav-icon";

  return (
    <div className={favIconClass} onClick={handleClick}>
      <FavIcon />
    </div>
  );
}

export default PhotoFavButton;