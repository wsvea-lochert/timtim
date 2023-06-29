import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Styles } from '../Styles';
import Button from '../components/Button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LoginScreen({ route, navigation }: any) {
  const { setIsSignedIn } = route.params;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function goToHome() {
    console.log('Login to TimTim');

    //TODO: Add login logic here
    if (username === 'Admin' && password === 'admin') {
      setIsSignedIn(true);
      // navigation.navigate('Home');
    } else if (username.length === 0 || password.length === 0) {
      Alert.alert('Username or Password cannot be empty');
    } else {
      Alert.alert('Username or Password is incorrect');
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login to TimTim</Text>
      <TextInput
        placeholder="Username"
        style={Styles.textInput}
        onChange={(e) => {
          setUsername(e.nativeEvent.text);
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={Styles.textInput}
        onChange={(e) => {
          setPassword(e.nativeEvent.text);
        }}
      />
      <Button title="Login" onPress={() => goToHome()} />
    </View>
  );
}

export default LoginScreen;
