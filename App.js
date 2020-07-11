import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native'
import HeaderNav from './component/HeaderNav';
import Search from './component/Search';
import Upload from './component/Upload';
import Heart from './component/Heart';
import Profile from './component/Profile';
import Home from './component/Home';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home"
                  component={Home}
      />
      <Tab.Screen name="search"
                  component={Search}
      />
      <Tab.Screen name="upload"
                  component={Upload}
      />
      <Tab.Screen name="heart"
                  component={Heart}
      />
      <Tab.Screen name="profile"
                  component={Profile}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App

