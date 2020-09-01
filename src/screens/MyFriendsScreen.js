import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import PopupMenu from '../components/UI/PopupMenu';

class MyFriendsScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>MyFriends Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyFriendsScreen;
