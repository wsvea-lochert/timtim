import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import { ButtonSolidStyles } from '../Styles';

interface props {
  onPress: () => void;
  width?: string;
}

export default function Button(props: props) {
  const { onPress, width = '50%' } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        ButtonSolidStyles.Background,
        ButtonSolidStyles.paddingAndMargin,
        pressed ? ButtonSolidStyles.BackgroundPressed : {},
        { width: width, paddingLeft: 15, paddingRight: 15 },
      ]}
      onPress={onPress}
    >
      <Text style={[ButtonSolidStyles.Text, { fontSize: 17 }]}>
        <Image source={require('timtim/assets/images/google.png')} style={{ resizeMode: 'contain', width: 16, height: 16, marginRight: 11 }} />
        Sign in with Google
      </Text>
    </Pressable>
  );
}
