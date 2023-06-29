import * as React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import LocationDetailsScreen from './screens/LocationDetailsScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  console.log('isSignedIn from app.tsx', isSignedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'TimTim',
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => (
                <Button onPress={() => setIsSignedIn(false)} title="Sign out" />
              ),
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            initialParams={{setIsSignedIn}} // Added age initialParam
          />
        )}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{name: 'William', age: 25}} // Added age initialParam
          options={{title: 'Details'}}
        />
        <Stack.Screen
          name="Location"
          component={LocationDetailsScreen}
          options={{title: 'Location'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
