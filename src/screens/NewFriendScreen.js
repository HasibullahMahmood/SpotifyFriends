import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class NewFriendsScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>NewFriends Screen</Text>
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

export default NewFriendsScreen;
