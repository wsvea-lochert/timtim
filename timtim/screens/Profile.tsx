import React, { useCallback, useEffect } from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';
import { TextStyles, colors, ViewStyles } from '../Styles';
import Button from '../components/Button';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { signOutLogic } from '../auth/authenticator';

interface Props {
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProfileScreen({ route, navigation }: any) {
  const { setIsSignedIn } = route.params;
  const isFocused = useIsFocused();

  //   function signOut() {
  //     console.log('Sign out');

  //     // Prompt the user if they are sure they want to sign out
  //     Alert.alert(
  //       'Sign Out', // title
  //       'Are you sure you want to sign out?', // message
  //       [
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'Yes',
  //           onPress: () => {
  //             setIsSignedIn(false);
  //             if (isFocused) {
  //               navigation.reset({
  //                 index: 0,
  //                 routes: [{ name: 'Home' }],
  //               });
  //             }
  //           },
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   }

  function signOut() {
    signOutLogic({ setIsSignedIn, navigation, isFocused });
  }

  return (
    <View style={[ViewStyles.container, ViewStyles.background]}>
      <View style={ViewStyles.leftContainer}>
        <Text style={TextStyles.titleText}>Profile!</Text>
        <Text style={TextStyles.fillerText}>This is the profile screen</Text>
      </View>
      <Button onPress={signOut} title={'Sign out'} disabled={false} width="90%" warning />
    </View>
  );
}

export default ProfileScreen;
