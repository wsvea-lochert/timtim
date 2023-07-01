import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export const useFonts = (fontMap: { [key: string]: string }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync(fontMap);
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading font', error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};
