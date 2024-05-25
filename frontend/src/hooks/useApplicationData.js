import { useReducer } from "react";


const useApplicationData = () => {

  const initialState = {
    modalOpen: false,
    selectPhoto: {},
    likedPhotos: [],
  };

  //reducer function to manage state
  const reducer = (state, action) => {
    switch (action.type) {
      //Change state of selected photo for modal based on modal toggle
      case 'TOGGLE_MODAL':
        return {
          ...state,
          modalOpen: !state.modalOpen,
          selectPhoto: action.payload,
        };

      // Check if photoID is already present in likedPhotos state, if not, add the photoID 
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

  //hook to use reducer function to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // use reducer function to toggle modal and set slected photo
  const toggleModal = (selectedPhoto) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: selectedPhoto });
  };

  // Use reducer function to toggle like state
  const toggleLike = (photoId) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: photoId });
  };

  return { state, toggleModal, toggleLike };
};


export default useApplicationData;