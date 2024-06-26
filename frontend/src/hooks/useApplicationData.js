import { useReducer, useEffect } from "react";


const useApplicationData = () => {

  const initialState = {
    modalOpen: false,
    selectPhoto: {},
    likedPhotos: [],
    photoData: [],
    topicData: []
  };

  //Reducer function to manage state
  const reducer = (state, action) => {
    switch (action.type) {
      //Change state of photo and topic data
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
      case 'SET_TOPIC_DATA':
        return { ...state, topicData: action.payload };

      //Change state of to filter photos based on topic selected
      case 'SET_PHOTOS_BY_TOPIC':
        return { ...state, photoData: action.payload };

      //Change state of selected photo for modal based on modal toggle
      case 'TOGGLE_MODAL':
        return {
          ...state,
          modalOpen: !state.modalOpen,
          selectPhoto: action.payload,
        };

      //Check if photoID is already present in likedPhotos state, if not, add the photoID 
      case 'TOGGLE_LIKE':
        const isLiked = state.likedPhotos.includes(action.payload);
        return {
          ...state,
          likedPhotos: isLiked
            ? state.likedPhotos.filter(id => id !== action.payload)
            : [...state.likedPhotos, action.payload],
        };

      default:
        throw new Error('Unexpected action');
    }
  };

  //Hook to use reducer function to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  //GET request to pull photo data from api server
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
      .catch((error) => console.error("Fetching photos failed:", error));
  }, []);

  //GET request to pull topic data from api server
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
      .catch((error) => console.error("Fetching topics failed:", error));
  }, []);

  //Use reducer function to toggle modal and set slected photo
  const toggleModal = (selectedPhoto) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: selectedPhoto });
  };

  //Use reducer function to toggle like state
  const toggleLike = (photoId) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: photoId });
  };

  //Use reducer function to filter photos by topic selected in nav bar
  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: data }))
      .catch((error) => console.error(`Fetching photos for topic ${topicId} failed:`, error));
  };

  return { state, toggleModal, toggleLike, fetchPhotosByTopic };

};


export default useApplicationData;