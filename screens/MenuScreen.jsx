import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import RestaurantLogo from '../assets/images/RestaurantLogo.jpg';
import RiceWithChicken from '../assets/images/RiceWithChicken.jpg';
import SpiceRamen from '../assets/images/SpiceRamen.jpg';
import JapaneseFriedChicken from '../assets/images/JapaneseFriedChicken.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuCard from '../components/MenuCard';
import {useNavigation} from '@react-navigation/native';
const MenuScreen = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.body}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={RestaurantLogo} />
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>URU BREWPARK</Text>
              <Text style={styles.subText}>
                Come in and discover your new favorite comfort food—made just
                for you!
              </Text>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Explore</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="options" size={24} color="white" />
            </View>
            <View style={styles.searchInputContainer}>
              <TextInput
                placeholder="Search your favourite food...."
                style={styles.searchInput}
              />
              <Pressable style={styles.searchIcon}>
                <Ionicons name="search-outline" size={24} color={'black'} />
              </Pressable>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <MenuCard
              img={RiceWithChicken}
              itemName={'Chicken With Rice'}
              itemDesc={
                'Rolled sushi, or maki, is sushi where ingredients like fish, vegetables, and rice are wrapped in a sheet of seaweed (nori) and then sliced into bite-sized pieces.'
              }
              itemPrice={'$7.99'}
              ratings={4.8}
            />
            <MenuCard
              img={SpiceRamen}
              itemName={'Spicy Ramen'}
              itemDesc={
                'Spicy ramen features a flavorful broth with a kick of heat, often made with soy sauce or miso and spiced up with chili paste or oil.'
              }
              itemPrice={'$8.99'}
              ratings={4.9}
            />
            <MenuCard
              img={JapaneseFriedChicken}
              itemName={'Japanese Fried Chicken'}
              itemDesc={
                'popular dish featuring bite-sized pieces of chicken that are marinated in a mixture of soy sauce, sake, and garlic, then coated in flour or starch and deep-fried until crispy.'
              }
              itemPrice={'$6.99'}
              ratings={4.8}
            />
          </View>
        </View>
        <Pressable
          style={styles.testButton}
          onPress={() => navigate.navigate('Checkout')}>
          <Text>Go to Checkout</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1, // Ensure parent View takes full height
    // backgroundColor: 'red',
  },
  container: {
    padding: 20,
    // backgroundColor: 'black',
  },
  imgContainer: {
    width: '100%',
    height: 200,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    opacity: 0.5, // Add opacity to make the overlay semi-transparent
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: '5%',
    left: 0,
    right: 0,
    // backgroundColor: 'white',
    padding: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'semibold',
    fontStyle: 'italic',
    fontSize: 15,
    width: '70%',
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'red',
    width: '20%',
    borderRadius: 10,
    marginHorizontal: 'auto',
    marginTop: 20,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 10,
  },
  searchInputContainer: {
    position: 'relative',
    flex: 1,
    // paddingLeft: 10,
  },
  searchInput: {
    width: '100%',
    borderBlockColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    paddingRight: 40,
  },
  searchIcon: {
    position: 'absolute',
    right: '5%',
    top: '25%',
  },
  testButton: {
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: '8%',
    width: '80%',
  },
  menuContainer: {
    paddingBottom: 150,
  },
});
