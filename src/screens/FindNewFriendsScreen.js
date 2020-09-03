import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import {getMutuals, getLocations, getDistance} from '../utils/Calculator';
import UserCart from '../components/UI/UserCart';

const FindNewFriendsScreen = (props) => {
  const myId = useSelector((state) => state.user.spotifyUserId);
  const mySavedTracks = useSelector(
    (state) => state.savedTracks.userSavedTracks,
  );
  const myLocation = useSelector((state) => state.location);

  (async () => {
    const mutuals = await getMutuals(mySavedTracks, myId);
    const locations = await getLocations(mutuals);
    const distances = [];
    locations.forEach((obj) => {
      let distance = getDistance(myLocation, obj.location);
      distances.push({
        distance: distance.toFixed(4),
        userId: obj.userId,
        mutualNumber: obj.mutualNumber,
      });
    });

    distances.sort((a, b) => a.distance.localeCompare(b.distance));

    console.log(distances);
  })();

  return (
    <View style={styles.screen}>
      <UserCart
        name="Mahmoud Abbiyah"
        number="15"
        imageUrl="https://i.scdn.co/image/ab6775700000ee85a9ed6ff772701ea5d4d14c59"
      />
      <UserCart
        name="Mahmoud Abbiyah"
        number="15"
        imageUrl="https://i.scdn.co/image/ab6775700000ee85a9ed6ff772701ea5d4d14c59"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default FindNewFriendsScreen;
