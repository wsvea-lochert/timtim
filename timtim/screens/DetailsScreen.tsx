import React from 'react';
import {View, Text, Button} from 'react-native';

function DetailsScreen({route, navigation}: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {age, name} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>
        Hello {name}, you are of age: {age}
      </Text>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

export default DetailsScreen;
