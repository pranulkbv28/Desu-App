import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CheckOutCard = ({img, name, price}) => {
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
        <Image source={img} style={styles.img} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Pressable style={styles.button} onPress={() => handleIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          <Text style={styles.quantityText}>{itemNumber}</Text>
          <Pressable style={styles.button} onPress={() => handleDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CheckOutCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    width: '100%',
    marginBottom: 20,
  },
  imgContainer: {
    width: 100,
    height: 100,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
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
