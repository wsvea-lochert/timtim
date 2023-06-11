// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

function DetailsScreen({route, navigation}: any) {
  const {age, name} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>
        Hello {name}, you are of age: {age}
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSignedIn, setIsSignedIn] = React.useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* {isSignedIn ? ( */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{name: 'John', age: 20}} // Added age initialParam
          options={{title: 'Details'}}
        />
        {/* // ) : ( */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        {/* // )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
