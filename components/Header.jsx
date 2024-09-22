import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Header = ({children}) => {
  const user = false;

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {user ? (
          <Image
            source={{uri: 'https://example.com/user-icon.jpg'}} // Add your image URL or local path
            style={styles.userIcon}
          />
        ) : (
          <FontAwesomeIcon name="user-circle-o" size={24} color="white" />
        )}
        <View style={styles.logoConrainer}>
          <Text style={styles.logoName1}>Desu</Text>
          <Text style={styles.logoName2}>A Pet Diet</Text>
        </View>
        <FeatherIcon name="menu" size={24} color="white" />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for Food" />
        <Pressable style={styles.searchIcon}>
          <FeatherIcon name="search" size={24} color="gray" />
        </Pressable>
      </View>
      {children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#37673a',
    width: '100%',
    paddingBottom: 30,
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space between the user icon, logo, and burger icon
  },
  logoConrainer: {
    alignItems: 'center', // Center the text within the logo container
  },
  logoName1: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoName2: {
    color: '#ffffff',
    fontSize: 12,
    paddingTop: 5,
  },
  searchContaine: {
    width: '100%',
    padding: 10,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  searchInput: {
    width: '80%',
    borderBlockColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingRight: 35,
    backgroundColor: 'white',
    marginHorizontal: 'auto',
  },
  searchIcon: {
    position: 'absolute',
    right: '12%',
    top: '25%',
  },
});
