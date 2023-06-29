import React from 'react';
import { Text, Pressable } from 'react-native';
import { Styles } from '../Styles';

interface props {
    onPress: () => void,
    title: string
};

export default function Button(props: props) {
    const { onPress, title = 'Button' } = props;
    return (
      <Pressable style={Styles.buttonSolidBackground} onPress={onPress}>
        <Text style={Styles.buttonSolidText}>{title}</Text>
      </Pressable>
    );
  }