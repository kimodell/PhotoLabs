import {useState} from 'react'



const useApplicationData = () => {
  const [state, setState] = useState({
    modalOpen: false,
    selectPhoto: {},
    likedPhotos: [],
  })

   //Change state of selected photo for modal based on modal toggle
  const toggleModal = (selectedPhoto) => {
    setState(prevState => ({
      ...prevState,
      modalOpen: !prevState.modalOpen,
    
    }));

    setState(prevState => ({
      ...prevState,
      selectPhoto: selectedPhoto,
    }));
  };

    //Function to check if photoID is already present in likedPhotos state, if not, add the photoID
  const toggleLike = function(photoId) {
    if (state.likedPhotos.includes(photoId)) {
      const copyOfFavorites = [...state.likedPhotos].filter(id => id !== photoId);
      setState(prevState => ({
        ...prevState,
        likedPhotos: copyOfFavorites,
      })
      )
      return
    }

    const updatedLikedPhotos = [...state.likedPhotos, photoId];
    setState(prevState => ({
      ...prevState,
      likedPhotos: updatedLikedPhotos,
    })
    )

  };

  return {state, toggleModal, toggleLike}
}


export default useApplicationData