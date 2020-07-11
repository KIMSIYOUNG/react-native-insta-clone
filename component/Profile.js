import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderNav from './HeaderNav';

const Profile = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <HeaderNav/>
      <Text>
        Profile 임
      </Text>
    </ScrollView>
  )
}

export default Profile;