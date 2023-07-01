import React, { useCallback, useEffect } from 'react';
import { View, Text, TextInput, Alert, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, StyleSheet, Keyboard } from 'react-native';
import { TextInputStyles, TextStyles, colors, ViewStyles } from '../Styles';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import { useFonts } from 'expo-font';
import { useIsFocused } from '@react-navigation/native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LoginScreen({ route, navigation }: any) {
  const { setIsSignedIn } = route.params;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disableLogin, setDisableLogin] = React.useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      setDisableLogin(false);
    } else {
      setDisableLogin(true);
    }
  }, [username, password]);

  function signIn() {
    console.log('Login to TimTim');

    if (username === 'Admin' && password === 'admin') {
      setIsSignedIn(true);
    } else if (username.length === 0 || password.length === 0) {
      Alert.alert('Username or Password cannot be empty');
    } else {
      Alert.alert('Username or Password is incorrect');
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[ViewStyles.container, ViewStyles.background]}>
          <Image source={require('../assets/images/timtimlogo.png')} style={{ resizeMode: 'contain', width: 200, height: 200 / 2 }} />
          <TextInput
            placeholder="Username"
            placeholderTextColor={colors.text.placeholder}
            style={[TextInputStyles.textInput, { width: '50%' }]}
            onChange={(e) => {
              setUsername(e.nativeEvent.text);
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.text.placeholder}
            secureTextEntry={true}
            style={[TextInputStyles.textInput, { width: '50%', marginBottom: 40 }]}
            onChange={(e) => {
              setPassword(e.nativeEvent.text);
            }}
          />
          <Button title="Login" onPress={() => signIn()} disabled={disableLogin} />
          <GoogleButton onPress={() => signIn()} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default LoginScreen;
