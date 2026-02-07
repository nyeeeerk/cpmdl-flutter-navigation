import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';


SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  
  
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    async function prepare() {
      try {
       
        await Promise.all([
           
           new Promise((resolve) => setTimeout(resolve, 3000)), 
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
        
        await SplashScreen.hideAsync();

       
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500, 
          useNativeDriver: true,
        }).start(() => {
          setSplashAnimationFinished(true);
        });
      }
    }
    prepare();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {}
      {appReady && <Slot />}

      {}
      {!splashAnimationFinished && (
        <Animated.View pointerEvents="none" style={[styles.splashContainer, { opacity: fadeAnim }]}>
          <LottieView
            source={require('./assets/loading.json')}
            autoPlay
            loop={true} 
            style={styles.lottie}
          />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, 
  },
  lottie: {
    width: '50%',
    height: '50%',
  },
});