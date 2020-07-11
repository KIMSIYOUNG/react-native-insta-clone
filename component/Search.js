import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderNav from './HeaderNav';

const Search = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <HeaderNav/>
      <Text>SEARCH</Text>
    </ScrollView>
  )
}

export default Search;