// react component
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Styles
import { ViewStyles } from '../Styles';

// Components
import Doughnut from './Doughnut';
import { week } from '../classes/Week';

interface Props {
  time: string;
  total: string;
}

const TimeCard: React.FC<Props> = ({ time, total }) => {
  const placeholderWeek = new week();
  placeholderWeek.hours = [1, 2, 3, 4, 5, 0, 0];

  return (
    <View>
      <Doughnut week={placeholderWeek}/>
      <Text style={{ color: '#fff' }}>{time}</Text>
      <Text style={{ color: '#fff' }}>{total}</Text>
    </View>
  );
};

export default TimeCard;
