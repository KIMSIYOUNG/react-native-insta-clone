import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../style/Style';
import Upload from '../Upload';

const UploadIcon = () => {
  return (
    <TouchableWithoutFeedback onPress={() => alert('ready to camera!')}><Image
      style={{ ...styles.tinyLogo, borderRadius: 100,}}
      source={{
        uri: 'https://cdn3.iconfinder.com/data/icons/instagram-18/512/192_Instagram_Camera_Image-512.png',
      }}/>
    </TouchableWithoutFeedback>
  )
}
export default UploadIcon;