import {StyleSheet, Text, ScrollView, Image, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import homeImg from '../assets/images/home-page-img.png';
import foodCard1 from '../assets/images/foodCard1.png';
import foodCard2 from '../assets/images/foodCard2.png';
import foodCard3 from '../assets/images/foodCard3.png';
import Card from '../components/Card';
import Card2 from '../components/Card2';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.body}>
      <Header>
        <Image style={styles.image} source={homeImg} />
      </Header>
      <View style={styles.homeView}>
        <View style={styles.homeHeader}>
          <Text>Special Menu</Text>
          <Text>See All</Text>
        </View>
        <View style={styles.cardsContainer}>
          <Card imgName={'Rice Bowls'} imgSrc={foodCard1} />
          <Card imgName={'Breads'} imgSrc={foodCard2} />
          <Card imgName={'Meat'} imgSrc={foodCard3} />
        </View>
        <View style={styles.cardsContainer2}>
          <Card2 />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  image: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    marginBottom: -90,
    marginHorizontal: 'auto',
    marginTop: 50,
  },
  homeView: {
    marginTop: 90,
    paddingHorizontal: 20,
  },
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  cardsContainer2: {
    width: '100%',
    backgroundColor: '#f4e3cf',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
});
