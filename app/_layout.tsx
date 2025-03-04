import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useThemeColor } from '@/hooks/useThemeColor';
import { allRoutes } from '@/constants/Routes';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backGroundColor = useThemeColor({}, 'background');
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backGroundColor, flex: 1 }}>
      <ThemeChangerProvider>
        {/*<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>*/}
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backGroundColor
            },
            headerStyle: {
              backgroundColor: backGroundColor
            }
          }}
        >
          <Stack.Screen
            name='index'
            options={{ title: 'Componets App' }}
          />
          {
            allRoutes.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                  headerShown: !route.title.includes('Slides')
                }}
              />
            ))
          }
        </Stack>
        <StatusBar style="auto" />
        {/*</ThemeProvider>*/}
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
