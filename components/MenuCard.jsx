import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const MenuCard = ({img, ratings, itemName, itemDesc, itemPrice}) => {
  const [itemNumber, setItemNumber] = useState(0);

  const handleIncrement = () => {
    setItemNumber(prev => prev + 1);
  };

  const handleDecrement = () => {
    setItemNumber(prev => (prev > 0 ? prev - 1 : 0)); // Prevent going below 0
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={img} />
        <Text style={styles.ratings}>{ratings}</Text>
      </View>
      <View>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.itemDesc}>{itemDesc}</Text>
        <Text style={styles.itemPrice}>{itemPrice}</Text>
        <View style={styles.quantityContainer}>
          <Pressable style={styles.button} onPress={handleDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>{itemNumber}</Text>
          <Pressable style={styles.button} onPress={handleIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
  },
  imgContainer: {
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 150, // Set a fixed height for the image
    borderRadius: 10,
  },
  ratings: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 5,
    borderRadius: 5,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  itemDesc: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
