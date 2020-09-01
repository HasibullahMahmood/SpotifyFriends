import {GET_CURRENT_USER_PROFILE, GET_USER_SAVED_TRACKS} from '../actions/user';

const initailState = {
  firebaseUserId: '',
  spotifyUserId: '',
  name: '',
  image: '',
  email: '',
  country: '',
  spotifyUrl: '',
  userSavedTracks: [],
};

export default (state = initailState, actions) => {
  switch (actions.type) {
    case GET_CURRENT_USER_PROFILE:
      return {
        ...state,
        spotifyUserId: actions.spotifyUserId,
        name: actions.name,
        image: actions.image,
        email: actions.email,
        country: actions.country,
        spotifyUrl: actions.spotifyUrl,
      };
    case GET_USER_SAVED_TRACKS:
      return {...state, userSavedTracks: actions.savedTracks};
    default:
      return state;
  }
};
