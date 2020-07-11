import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../style/Style';

const DirectIcon = () => {
  return (
    <TouchableWithoutFeedback onPress={() => alert("send message!")}><Image
      style={{ ...styles.tinyLogo, borderRadius: 100,}}
      source={{
        uri: 'https://static.thenounproject.com/png/2796195-200.png',
      }}/>
    </TouchableWithoutFeedback>
  )
}

export default DirectIcon;