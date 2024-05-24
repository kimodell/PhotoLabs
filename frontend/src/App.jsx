import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  //Use sate to open or close modal, display modal if modalOpen is true
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  return (
    <div className="App">
    <HomeRoute topics={topics} 
    photos={photos} 
    modalOpen={modalOpen} 
    setModalOpen={setModalOpen}
    toggleModal={toggleModal}/>
    {modalOpen && <PhotoDetailsModal modalOpen={modalOpen} toggleModal={toggleModal}/>}
  </div>
  );
};

export default App;