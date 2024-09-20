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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabIcon = ({focused}) => {
  return <Entypo name="home" size={24} color={focused ? '#bfbdbc' : 'black'} />;
};
const ListTabIcon = ({focused}) => {
  return (
    <MaterialIcon
      name="restaurant-menu"
      size={24}
      color={focused ? '#bfbdbc' : 'black'}
    />
  );
};
const MenuTabIcon = ({focused}) => {
  return (
    <FontAwesome6
      name="bowl-food"
      size={24}
      color={focused ? '#bfbdbc' : 'black'}
    />
  );
};
const InboxTabIcon = ({focused}) => {
  return (
    <Octicons name="mail" size={24} color={focused ? '#bfbdbc' : 'black'} />
  );
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute', // Helps to move it freely without being docked
          bottom: 20, // Moves the tab bar 20 units from the bottom of the screen
          height: 60, // Adjust the height of the tab bar
          // borderRadius: 20, // Optional: Adds rounded corners
          backgroundColor: 'white', // Optional: Adds background color for visibility
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
        }}
      />
      <Tab.Screen
        name="LIST"
        component={ListScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ListTabIcon,
        }}
      />
      <Tab.Screen
        name="MENU"
        component={MenuScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: MenuTabIcon,
        }}
      />
      <Tab.Screen
        name="INBOX"
        component={InboxScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: InboxTabIcon,
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
  },
});
