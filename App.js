import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchMovie from './src/components/SearchMovie';
import Favorites from './src/components/Favorites'

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './src/store/config';

import RootStack from './src/naviagtion/StackNavigator'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store= { Store }>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <RootStack />
            
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
