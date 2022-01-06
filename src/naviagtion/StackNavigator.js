import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchMovie from '../components/SearchMovie';
import Movie from '../components/Movie';
import Favorites from '../components/Favorites';

const StackNavigator = createStackNavigator();


function RootStack() {
  return (
    <StackNavigator.Navigator
      initialRouteName="Movies"
      >
      <StackNavigator.Screen
        name="Movies"
        component={SearchMovie}
      />
      <StackNavigator.Screen
        name="Movie"
        component={Movie}
      />
      <StackNavigator.Screen
        name="Favoris"
        component={Favorites}
      />
    </StackNavigator.Navigator>
  );
}

export default RootStack;