import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AuthHeader from '../components/AuthHeader';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AuthHeader />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomHeaderContainer}>
          <Text style={styles.bottomHeaderText}>Sign up</Text>
          <View>
            <Ionicons name="paw-sharp" size={36} color="white" />
          </View>
        </View>
        <View style={styles.bottomBodyContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter your name" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter your name" />
          </View>
          <View style={styles.inputContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('HOME')}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: '#0cc0df',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    marginTop: -50,
  },
  bottomHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    color: 'white',
  },
  bottomHeaderText: {
    color: 'white',
    fontSize: 30,
  },
  bottomBodyContainer: {
    width: '100%',
  },
  inputContainer: {
    width: '80%',
    marginHorizontal: 'auto',
    marginBottom: 20,
  },
  label: {
    marginLeft: 10,
    color: 'white',
  },
  input: {
    width: '100%',
    // borderBlockColor: 'black',
    // borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    backgroundColor: '#51dbf2',
    color: '#bf592b',
  },
  button: {
    padding: 10,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
    width: '40%',
    marginHorizontal: 'auto',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    // fontSize: 20,
    textAlign: 'center',
  },
});
