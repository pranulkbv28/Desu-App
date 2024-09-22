import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import deliveryCard from '../assets/images/deliveryCard.png';

const Card2 = () => {
  return (
    <View style={styles.body}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Free Delivery</Text>
        <Text style={styles.text2}>Order</Text>
        <Text style={styles.text3}>For purchases over ₹999</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={deliveryCard} resizeMode="cover" />
      </View>
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text3: {
    fontSize: 15,
    fontWeight: 'semibold',
    color: 'black',
  },
  imageContainer: {
    flex: 1,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
});
