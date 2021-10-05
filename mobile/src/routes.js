import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Favorites from './pages/Favorites';
import ShowByCategoria from './pages/ShowByCategoria';
import ShowByTag from './pages/ShowByTag';
import ShowById from './pages/ShowById';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="ShowByCategoria"
        component={ShowByCategoria}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="ShowByTag"
        component={ShowByTag}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="ShowById"
        component={ShowById}
      />
    </Stack.Navigator>
  );
};
const StackNavigator2 = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen
        options={{headerShown: false}}
        name="Favorite"
        component={Favorites}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ShowById"
        component={ShowById}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="ShowByTag"
        component={ShowByTag}
      />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'rgba(207, 0, 15, 1)',
        tabBarInactiveTintColor: 'white',
        unmountOnBlur: true,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
      }}>
      <Tab.Screen
        name="Principal"
        component={StackNavigator1}
        options={{
          headerShown: false,
          tabBarLabel: 'Principal',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={StackNavigator2}
        options={{
          headerShown: false,
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="heart" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CreateUser"
        component={CreateUser}
      />
    </Stack.Navigator>
  );
};

export default function MainNavigator(signed = false) {
  return !signed ? <MainStackNavigator /> : <MainTabNavigator />;
}
