import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

// Styles
import { TextStyles, ViewStyles } from '../Styles';

// utils
import { MessageGenerator } from '../utils/MessageGenerator';

// Components
import Divider from '../components/Divider';
import TimeCard from '../components/TimeCard';

// Hooks
import { useFonts } from '../hooks/useFont';


function HomeScreen({ navigation }: any) {
  const messages = new MessageGenerator();
  const fontsLoaded = useFonts({
    SubjectivityBlack: require('../assets/fonts/Subjectivity-Thin.otf'),
    SubjectivityMedium: require('../assets/fonts/Subjectivity-Medium.otf'),
  });

  return (
    <View style={[ViewStyles.container, ViewStyles.background]}>
      <View style={ViewStyles.leftContainer}>
        <Text style={TextStyles.titleText}>{messages.greetings()}!</Text>
        {fontsLoaded && (
          <Text
            style={[{ fontFamily: 'SubjectivityBlack' }, TextStyles.fillerText, { fontSize: 30 }]}
          >
            {new Date().toDateString()}
          </Text>
        )}
        <Divider color="#ccc" thickness={0.5} />

        <TimeCard time="8h 30m" total="40h" />
      </View>

      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            age: 25,
            name: 'William',
          });
        }}
      />
      <Button
        title="Go to Navigation details"
        onPress={() => {
          navigation.navigate('Location');
        }}
      />
    </View>
  );
}

export default HomeScreen;
