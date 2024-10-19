import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import ListScreen from '../screens/ListScreen';
import MenuScreen from '../screens/MenuScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen from '../screens/SignupScreen';
import VerificationScreen from '../screens/VerificationScreen';
import LoginScreen from '../screens/LoginScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabIcon = ({focused}) => {
  return <Entypo name="home" size={24} color={focused ? '#bfbdbc' : 'white'} />;
};
const ListTabIcon = ({focused}) => {
  return (
    <MaterialIcon
      name="restaurant-menu"
      size={24}
      color={focused ? 'red' : 'white'}
    />
  );
};
const MenuTabIcon = ({focused}) => {
  return (
    <FontAwesome6
      name="bowl-food"
      size={24}
      color={focused ? '#bfbdbc' : 'white'}
    />
  );
};
const InboxTabIcon = ({focused}) => {
  return (
    <Octicons name="mail" size={24} color={focused ? '#bfbdbc' : 'white'} />
  );
};

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute', // Helps to move it freely without being docked
          bottom: 20, // Moves the tab bar 20 units from the bottom of the screen
          height: 60, // Adjust the height of the tab bar
          // borderRadius: 20, // Optional: Adds rounded corners
          backgroundColor: '#37673a', // Optional: Adds background color for visibility
          paddingBottom: 10, // Optional: Ensures icons don't get too close to the edge
          paddingTop: 10, // Optional: Adds padding around icons
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: HomeTabIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LIST"
        component={ListScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ListTabIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MENU"
        component={MenuStack}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: MenuTabIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="INBOX"
        component={InboxScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: InboxTabIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

function MainStack() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // paddingBottom: 20,
    // backgroundColor: 'red',
  },
});
