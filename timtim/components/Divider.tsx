import React from 'react';
import { View, StyleSheet } from 'react-native';

interface DividerProps {
  color?: string;
  thickness?: number;
  margin?: number;
}

const Divider: React.FC<DividerProps> = ({ color = '#000', thickness = 1, margin = 10 }) => (
  <View
    style={[
      styles.divider,
      { borderBottomColor: color, borderBottomWidth: thickness, marginVertical: margin },
    ]}
  />
);

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default Divider;
