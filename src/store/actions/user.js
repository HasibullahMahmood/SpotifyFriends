import axios from 'axios';

export const GET_CURRENT_USER_PROFILE = 'GET_CURRENT_USER_PROFILE';
export const GET_USER_SAVED_TRACKS = 'GET_USER_SAVED_TRACKS';
let spotifyUserId;

export const getCurrentUserProfile = (accessToken) => {
  return (dispatch) => {
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    };

    let options = {
      url: 'https://api.spotify.com/v1/me',
      headers: headers,
    };
    axios(options)
      .then((response) => {
        let res = JSON.parse(response.request._response);
        spotifyUserId = res.id;
        let x = {
          type: GET_CURRENT_USER_PROFILE,
          spotifyUserId: res.id,
          name: res.display_name,
          email: res.email,
          country: res.country,
          spotifyUrl: res.external_urls.spotify,
        };

        if (res.images.length != 0) {
          x = {...x, image: res.images[0].url};
        }
        dispatch(postUserProfileToFirebase(x));
      })
      .catch((error) => {
        console.log('getCurrentUserProfile actions/user.js error: ');
        console.log(error.message);
      });
  };
};

const postUserProfileToFirebase = (data) => {
  return (dispatch) => {
    axios
      .patch(
        `https://spotifyfriends-d6f2a.firebaseio.com/users/${data.spotifyUserId}.json`,
        data,
      )
      .then((response) => {
        dispatch(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getUserSavedTracks = (accessToken) => {
  return (dispatch) => {
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    };

    let options = {
      url: 'https://api.spotify.com/v1/me/tracks?&limit=50&offset=0',
      headers: headers,
    };

    axios(options)
      .then((response) => {
        const transformedData = JSON.parse(response.request._response);
        let length = transformedData.items.length;
        const savedTracks = [];
        for (let i = 0; i < length; i++) {
          savedTracks.push({
            id: transformedData.items[i].track.id,
            name: transformedData.items[i].track.name,
          });
        }
        const data = {type: GET_USER_SAVED_TRACKS, savedTracks: savedTracks};
        dispatch(postUserSavedTracksToFirebase(data));
      })
      .catch((error) => {
        console.log('getUserSavedTracks user.js actions error');
        console.log(error.message);
      });
  };
};

const postUserSavedTracksToFirebase = (data) => {
  return (dispatch) => {
    axios
      .patch(
        `https://spotifyfriends-d6f2a.firebaseio.com/users/${spotifyUserId}.json`,
        data,
      )
      .then((response) => {
        dispatch(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
