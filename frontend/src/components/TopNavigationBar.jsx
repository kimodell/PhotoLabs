import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//Component to display top nav bar with logo, topics and fave icon
const TopNavigation = ({ likedPhotos, topics, fetchPhotosByTopic }) => {

  const isFavPhotoExist = likedPhotos.length !== 0;

  //Fetch photos based on topic selected in nav bar
  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} selected={true} />
    </div>
  );
};

export default TopNavigation;