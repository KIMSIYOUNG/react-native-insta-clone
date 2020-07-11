import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderNav from './HeaderNav';

const Heart = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <HeaderNav/>
      <Text>
        HEART임
      </Text>
    </ScrollView>
  )
}

export default Heart;