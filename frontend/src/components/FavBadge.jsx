import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//Component to render fav icon with notification if photos have been liked
const FavBadge = ({ isFavPhotoExist, selected }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
    </div>
  );
};

export default FavBadge;