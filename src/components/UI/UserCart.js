import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

const UserCart = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: props.imageUrl,
          }}
        />
      </View>
      <View style={styles.textsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.number}>{props.number}</Text>
          <Text style={styles.detail}> mutual liked tracks </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    height: 70,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    borderColor: '#eee',
    borderRightWidth: 1,
  },
  image: {
    width: 60,
    borderRadius: 30,
    height: 60,
    borderColor: '#eee',
    borderWidth: 1,
  },
  textsContainer: {
    flexDirection: 'column',
    width: '75%',
    paddingVertical: 20,
    paddingLeft: 20,
  },
  nameContainer: {
    paddingBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  number: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default UserCart;
