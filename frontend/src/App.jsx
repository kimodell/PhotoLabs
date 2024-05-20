import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

//crate an array to fill with photo items
const photos = new Array(3)


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/*fill photos array with undefined values, map over each element, ignoring the value and using index as key for each element to be rendered*/} 
      {photos.fill().map((_, index) =>
      <PhotoListItem key={index} listItem={sampleDataForPhotoListItem} />
      )}
    </div>
  );
};

export default App;