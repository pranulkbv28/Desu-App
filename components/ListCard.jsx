import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListCard = ({imgSrc, deliveryTime, priceForOne, place}) => {
  console.log('Here');
  return (
    <Pressable style={styles.body}>
      <Image style={styles.image} source={imgSrc} resizeMode="cover" />
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <Text style={styles.text1}>{deliveryTime}</Text>
          <Text style={styles.text2}>₹{priceForOne} for one</Text>
          {/* <Text>Hello</Text> */}
        </View>
        <View style={styles.text2}>
          <Text style={styles.text3}>{place}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    position: 'relative',
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
