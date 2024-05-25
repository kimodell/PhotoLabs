import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//Component to display top nav bar with logo, topics and fave icon
const TopNavigation = ({likedPhotos, topics}) => {

  const isFavPhotoExist = likedPhotos.length !== 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} selected={true} />
    </div>
  );
};

export default TopNavigation;