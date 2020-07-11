import React from 'react';
import { ScrollView, Text, StatusBar } from 'react-native';
import HeaderNav from './HeaderNav';

function Home() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <HeaderNav/>
      <StatusBar barStyle='dark-content'/>
      <Text>HOME</Text>
    </ScrollView>
  );
}

export default Home;