import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const LoadingIndicator = (props) => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.buttonColor2} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default LoadingIndicator;
