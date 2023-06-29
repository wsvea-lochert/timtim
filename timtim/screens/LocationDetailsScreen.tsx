import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';


import * as Location from 'expo-location';

function DetailsScreen({navigation}: any) {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        const newLocal = 'Permission to access location was denied';
        console.log(newLocal);
        setErrorMsg(newLocal);
        return;
      }

      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setErrorMsg('');
      }
    })();
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8034C0'}}>
      <Text style={{fontSize: 20}}>Navigation details</Text>
      <Text style={{padding: 20}}>
        This is a debugging page. If you for some reson happend to get here, do
        report it please!
      </Text>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <View>
          <Text>
            Lat: {location?.coords.latitude}, Long: {location?.coords.longitude}
          </Text>
          <Text>
            Altitude: {location?.coords.altitude}, accuracy:{' '}
            {location?.coords.accuracy}
          </Text>
          <Text>Timestamp: {location?.timestamp}</Text>
        </View>
      )}

      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

export default DetailsScreen;
