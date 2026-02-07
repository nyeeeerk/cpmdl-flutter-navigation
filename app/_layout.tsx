import { Slot } from 'expo-router'; // Import this to handle navigation
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Keep the native splash visible while we prepare
SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function RootLayout() {
  const [isAppReady, setAppReady] = useState(false);
  const [isAnimationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts or make API calls here
      } catch (e) {
        console.warn(e);
      } finally {
        // 1. App is ready to render
        setAppReady(true);
        // 2. Hide the static native splash so the Lottie becomes visible
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  const onAnimationFinish = () => {
    setAnimationFinished(true);
  };

  // 1. If the app is loading data, show nothing (native splash handles this)
  if (!isAppReady) {
    return null;
  }

  // 2. If data is ready but animation is still playing, show Lottie
  if (!isAnimationFinished) {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('./assets/loading.json')} // Adjust path if needed
          autoPlay
          loop={false} // Must be false to trigger finish
          onAnimationFinish={onAnimationFinish}
          style={styles.lottie}
        />
      </View>
    );
  }

  // 3. Animation finished: Render the Expo Router Slot
  // This essentially says: "Now load whatever is in app/index.tsx or app/(tabs)"
  return <Slot />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Make sure background matches your theme
  },
  lottie: {
    width: '50%',
    height: '50%',
  },
});