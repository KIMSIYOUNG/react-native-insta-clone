import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UploadIcon from './Icon/UploadIcon';
import DirectIcon from './Icon/DirectIcon';
import Hello from './Hello';

const Stack = createStackNavigator();

function HeaderNav() {
  return (
    <Stack.Navigator initialRouteName='Instagram'>
      <Stack.Screen name="Instagram" component={Hello}
                    options={{
                      headerLeft: () => <UploadIcon/>,
                      headerRight: () => <DirectIcon/>,
                    }}
      />
    </Stack.Navigator>
  );
}

export default HeaderNav;
