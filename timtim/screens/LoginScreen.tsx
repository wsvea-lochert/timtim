import React from 'react';
import {View, Text, Button} from 'react-native';

function LoginScreen({route, navigation}: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {setIsSignedIn} = route.params;

  function goToHome() {
    console.log('Login to TimTim');
    setIsSignedIn(true);
    // navigation.navigate('Home');
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login to TimTim</Text>
      <Button title="Login" onPress={() => goToHome()} />
    </View>
  );
}

export default LoginScreen;
