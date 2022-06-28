import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categorias from './pages/Categorias';




const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
  <TabNavigation.Navigator screenOptions={{
    headerShown:false,
    tabBarStyle:{backgroundColor: '#fff', borderBottomWidth:0,}
  }}>
    <TabNavigation.Screen name='HomeTabScreen' component={Home}/>
    <TabNavigation.Screen name='CategoriasTabScreen' component={Categorias}/>
  </TabNavigation.Navigator>
  );
}

const Drawernavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  <Drawernavigation.Navigator>
    <Drawernavigation.Screen name="TabNavigationScreen" component={BottomTabNavigator}/>
    <Drawernavigation.Screen name="CategoriasDrawerScreen" component={Categorias}/>
  </Drawernavigation.Navigator>
}

const StackNavigation = createNativeStackNavigator();
export default () => {
    return(
      <NavigationContainer>
        <StackNavigation.Navigator screenOptions={{
        headerShown:false}}>
        <StackNavigation.Screen
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name= 'Home'
          component={BottomTabNavigator}
        />

        </StackNavigation.Navigator>
      </NavigationContainer>
    )
};

/*return(
    <Home />
  );*/