import React from 'react';
import { Text, Pressable } from 'react-native';
import { ButtonSolidStyles } from '../Styles';

interface props {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  width?: string;
  warning?: boolean;
}

export default function Button(props: props) {
  const { onPress, title = 'Button', disabled = true, width = '50%', warning = false } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        warning ? ButtonSolidStyles.BackgroundWarning : ButtonSolidStyles.Background,
        disabled ? ButtonSolidStyles.Disabled : pressed ? ButtonSolidStyles.BackgroundPressed : {},
        {width: width}, ButtonSolidStyles.paddingAndMargin]}
      onPress={disabled ? () => console.log('Button is disabled') : onPress}
    >
      <Text
        style={[
          ButtonSolidStyles.Text,
          disabled ? ButtonSolidStyles.DisabledText : {},
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
