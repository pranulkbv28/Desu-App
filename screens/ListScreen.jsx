import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import listImg from '../assets/images/listImg.png';
import ListCard from '../components/ListCard';

const ListScreen = () => {
  return (
    <ScrollView style={styles.body}>
      <Header />
      <View style={styles.container}>
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
        <ListCard
          imgSrc={listImg}
          deliveryTime={'15 mins'}
          priceForOne={250}
          place={'URU Brewpark'}
        />
      </View>
    </ScrollView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
});
