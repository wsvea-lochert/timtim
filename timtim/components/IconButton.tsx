// IconButton.tsx
import React from 'react';
import { Pressable, Image } from 'react-native';
import { iconButtonStyles } from '../Styles';

interface props {
  onPress: () => void;
  disabled?: boolean;
  icon: number;
}

export default function IconButton(props: props) {
  const { onPress, disabled = false, icon } = props;

  return (
    <Pressable
      style={({ pressed }) => [iconButtonStyles.Background, pressed ? iconButtonStyles.BackgroundPressed : {}, { width: 15, height: 15 }]}
      onPress={disabled ? () => console.log('Button is disabled') : onPress}
    >
      <Image source={icon} style={{ resizeMode: 'contain', width: 20, height: 20 }} />
    </Pressable>
  );
}
