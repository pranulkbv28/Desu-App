import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import CheckOutCard from '../components/CheckOutCard';
import burger from '../assets/images/burger.jpg';

const CheckoutScreen = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate.goBack()} style={styles.backButton}>
        <AntDesignIcon name="left" size={24} color="black" />
      </Pressable>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.checkOutCardContainer}>
          <CheckOutCard img={burger} name="Burger" price={'$10.00'} />
          <CheckOutCard img={burger} name="Burger" price={'$10.00'} />
          <CheckOutCard img={burger} name="Burger" price={'$10.00'} />
          <CheckOutCard img={burger} name="Burger" price={'$10.00'} />
          <CheckOutCard img={burger} name="Burger" price={'$10.00'} />
          <CheckOutCard img={burger} name="Burger" price={'$10.00'} />
          <CheckOutCard img={burger} name="Burger" price={'$10.00'} />
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.headText}>Payment Details</Text>
          <View style={styles.paymentContainer}>
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Sub Total</Text>
              <Text style={styles.subTotalText}>$10.00</Text>
            </View>
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Delivery Charges</Text>
              <Text style={styles.subTotalText}>$10.00</Text>
            </View>
          </View>
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountText}>Total</Text>
            <Text style={styles.totalAmountText}>$20.00</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Check Out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0cc0df',
    padding: 20,
    // paddingBottom: 200,
  },
  backButton: {
    backgroundColor: 'white',
    // padding: 10,
    borderRadius: 25,
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    marginTop: 30,
    marginBottom: 50,
    // paddingBottom: 20,
  },
  totalContainer: {
    marginVertical: 30,
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subTotalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    fontWeight: 'semibold',
  },
  totalAmountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    width: '80%',
    marginHorizontal: 'auto',
    borderWidth: 2,
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 50,
  },
  button: {
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
