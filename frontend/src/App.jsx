import React from 'react';

 // import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import './App.scss';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <TopicList />
    <PhotoList />
  </div>
  );
};

export default App;