import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#7237B7',
  secondary: '#171D1C',
  warning: '#E56B70',
  text: {
    title: '#EAE4DE',
    filler: '#EAE4DE',
    placeholder: '#461480',
  },
  button: {
    default: {
      background: '#E0E0E0',
      text: '#1D1D1D',
    },
    primary: {
      background: '#EFE8E3',
      text: '#21202D',
    },
  },
  disabled: {
    background: '#5D4795',
    text: '#8B80B1',
  },
  unselected: {
    primary: '#392473',
  },
};

export const ButtonSolidStyles = StyleSheet.create({
  paddingAndMargin: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  Background: {
    backgroundColor: colors.button.primary.background,
  },
  BackgroundPressed: {
    opacity: 0.5,
  },
  BackgroundWarning: {
    backgroundColor: colors.warning,
  },
  Disabled: {
    backgroundColor: colors.disabled.background,
  },
  DisabledText: {
    color: colors.disabled.text,
    fontSize: 20,
  },
  Text: {
    color: colors.button.primary.text,
    fontSize: 20,
    textAlign: 'center',
  },
});

export const iconButtonStyles = StyleSheet.create({
  Background: {
    marginBottom: 10,
    marginRight: 5,
    backgroundColor: 'transparent',
  },
  BackgroundPressed: {
    marginBottom: 10,
    marginRight: 5,
    backgroundColor: 'transparent',
    opacity: 0.5,
  },
});

export const TextStyles = StyleSheet.create({
  fillerText: {
    color: colors.text.filler,
    fontSize: 20,
  },
  titleText: {
    color: colors.text.title,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export const TextInputStyles = StyleSheet.create({
  textInput: {
    // width: '50%',
    borderColor: colors.unselected.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
    color: colors.text.title,
  },
});

export const ViewStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    height: 'auto',
  },
  verticalStack: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red', // Temporarily for debugging
  },
   
  horizontalStack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
});
