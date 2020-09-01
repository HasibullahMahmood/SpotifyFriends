import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as userActions from '../store/actions/user';
import LoadingIndicator from '../components/UI/LoadingIndicator';

const ChatsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  let accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      await dispatch(userActions.getCurrentUserProfile(accessToken));
      await dispatch(userActions.getUserSavedTracks(accessToken));
      setIsLoading(false);
    };
    getUserData();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <View style={styles.screen}>
      <Text>Chats Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatsScreen;
