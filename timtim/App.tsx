// App.tsx
import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import LocationDetailsScreen from './screens/LocationDetailsScreen';
import LoginScreen from './screens/LoginScreen';

import IconButton from './components/IconButton';
import userIcon from './assets/images/user.png';
import timtimLogo from './assets/images/timtimlogo.png';

import { colors } from './Styles';
import ProfileScreen from './screens/Profile';

const Stack = createNativeStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(true);

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: () => <Image source={timtimLogo} style={{ resizeMode: 'contain', width: 80, height: 40 }} />,
              headerRight: () => <IconButton onPress={() => navigation.navigate('Profile')} icon={userIcon} />,
              headerStyle: {
                backgroundColor: colors.primary,
              },
            })}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Profile', headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.text.filler }}
            initialParams={{ setIsSignedIn: setIsSignedIn }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{ name: 'William', age: 25 }} // Added age initialParam
            options={{ title: 'Details', headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.text.filler }}
          />
          <Stack.Screen name="Location" component={LocationDetailsScreen} options={{ title: 'Location' }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            initialParams={{ setIsSignedIn }} // Added setIsSignedIn initialParam
            options={{ title: '', headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
