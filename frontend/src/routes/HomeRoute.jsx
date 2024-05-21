import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

//Homepage route to view photos and nav bar from homepage
const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics}/>
      <PhotoList photos={props.photos}/>
    </div>
  );
};

export default HomeRoute;
