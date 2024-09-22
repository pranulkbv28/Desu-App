import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = ({imgSrc, imgName}) => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={imgSrc}
        resizeMode="cover"
        resizeMethod="resize"
      />
      <Text style={styles.text}>{imgName}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  body: {
    borderRadius: 10,
    width: '30%',
    // overflow: 'hidden', // Ensures the image stays within the card's border radius
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 200,
  },
  image: {
    width: '100%',
    height: 200, // Set a fixed height to control the image size
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
  },
});
