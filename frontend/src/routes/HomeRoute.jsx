import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

//Homepage route to view photos and nav bar from homepage
const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likedPhotos={props.likedPhotos} />
      <PhotoList photos={props.photos} 
      likedPhotos={props.likedPhotos} 
      toggleLike={props.toggleLike}
      modalOpen = {props.modalOpen}
      setModalOpen= {props.setModalOpen}
      toggleModal={props.toggleModal}
      selectPhoto={props.selectPhoto}
       />
    </div>
  );
};

export default HomeRoute;
