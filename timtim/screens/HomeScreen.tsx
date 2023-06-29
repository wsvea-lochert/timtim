// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            age: 25,
            name: 'William',
          });
        }}
      />
      <Button
        title="Go to Navigation details"
        onPress={() => {
          navigation.navigate('Location');
        }}
      />
    </View>
  );
}

export default HomeScreen;
