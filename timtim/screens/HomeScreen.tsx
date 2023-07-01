import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { TextStyles, ViewStyles } from '../Styles';
import * as Font from 'expo-font';
import { MessageGenerator } from '../utils/MessageGenerator';

function HomeScreen({ navigation }: any) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const messages = new MessageGenerator();

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        SubjectivityBlack: require('../assets/fonts/Subjectivity-Thin.otf'),
        SubjectivityMedium: require('../assets/fonts/Subjectivity-Medium.otf'),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading font', error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

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
