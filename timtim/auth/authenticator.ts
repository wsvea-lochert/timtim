import { Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type ResetAction = {
  index: number;
  routes: Array<{ name: string }>;
};

interface SignOutLogicProps {
  setIsSignedIn: (value: boolean) => void;
  navigation: StackNavigationProp<any>;
  isFocused: boolean;
}

export const signOutLogic = ({ setIsSignedIn, navigation, isFocused }: SignOutLogicProps) => {
  console.log('Sign out');

  Alert.alert(
    'Sign Out',
    'Are you sure you want to sign out?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          setIsSignedIn(false);
          if (isFocused) {
            const action: ResetAction = {
              index: 0,
              routes: [{ name: 'Login' }],
            };
            navigation.reset(action);
          }
        },
      },
    ],
    { cancelable: false }
  );
};
