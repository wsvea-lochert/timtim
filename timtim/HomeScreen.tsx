// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            age: 86,
            name: 'Jane',
          });
        }}
      />
    </View>
  );
}

export default HomeScreen;
