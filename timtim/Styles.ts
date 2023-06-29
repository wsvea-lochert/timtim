import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillerText: {
    color: '#21202D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    color: '#21202D',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonSolidBackground: {
    marginTop: 10,
    backgroundColor: '#21202D',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  buttonSolidText: {
    color: '#E9E2DD',
    fontSize: 20,
  },
  buttonOutlinedText: {
    color: '#21202D',
  },
  textInput: {
    width: '50%',
    borderColor: '#21202D',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});
