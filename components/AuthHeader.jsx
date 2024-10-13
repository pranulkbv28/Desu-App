import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logoImg from '../assets/images/logo.jpg';
import React from 'react';

const AuthHeader = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.allIconContainer}>
        <Text>Some Dots</Text>
        <View style={styles.iconContainer}>
          <Ionicons name="paw-sharp" size={56} color="#ffd200" />
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Text>Welcome To</Text>
        <Image source={logoImg} />
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 20,
    backgroundColor: '#e7f0f1',
    height: '50%',
    // flex: 1,
  },
  allIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  iconContainer: {
    transform: [{rotate: '-120deg'}],
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
