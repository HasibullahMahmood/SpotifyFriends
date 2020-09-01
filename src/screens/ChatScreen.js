import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>Chat Screen</Text>
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

export default ChatScreen;
