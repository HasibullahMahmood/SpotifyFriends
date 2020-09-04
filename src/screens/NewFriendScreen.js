import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import CustomButtom from '../components/UI/CustomButton';

const NewFriendsScreen = (props) => {
  const userData = props.navigation.getParam('data');

  let source = {source: {uri: userData.image}, type: 1};
  let style = styles.image;
  if (!userData.image) {
    source = {source: require('../images/profile.png'), type: 2};
    style = styles.profileImage;
  }

  const imagePressHandler = () => {
    props.navigation.push('ImageScreen', {source: source});
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={imagePressHandler}>
        <Image style={style} source={source.source} />
      </TouchableOpacity>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Location here!</Text>
      </View>
      <CustomButtom>Start Chat</CustomButtom>
    </View>
  );
};

NewFriendsScreen.navigationOptions = (navData) => {
  const userData = navData.navigation.getParam('data');
  let name = userData.name;
  if (name.length > 20) {
    name = userData.name.substring(0, 20) + '...';
  }

  return {
    headerTitle: () => (
      <View style={styles.container}>
        <Text style={styles.name}>{name.toUpperCase()}</Text>
        <View style={styles.mutualTextContainer}>
          <Text style={styles.number}>{userData.mutualNumber}</Text>
          <Text style={styles.detail}> mutual liked tracks</Text>
        </View>
      </View>
    ),
    headerRight: () => {},
    headerTitleAlign: 'center',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  container: {},
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mutualTextContainer: {
    flexDirection: 'row',
  },
  number: {
    color: 'red',
    fontWeight: 'bold',
  },
  detail: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.3,
  },
  profileImage: {
    marginTop: 10,
    width: '100%',
    height: 250,
    aspectRatio: 1,
  },
  locationContainer: {
    width: '95%',
    height: 150,
    borderColor: '#b3b3b3',
    borderWidth: 1,
    backgroundColor: 'white',
    marginVertical: 10,
    justifyContent: 'center',
  },
  locationText: {
    textAlign: 'center',
  },
});

export default NewFriendsScreen;
