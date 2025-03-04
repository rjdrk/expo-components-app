import { useState } from 'react';
import CustomThemedCard from '@/presentation/shared/CustomThemedCard';
import CustomThemedSwitch from '@/presentation/shared/CustomThemedSwitch';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { useColorScheme } from "nativewind";
import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';

const ThemesScreen = () => {
  //const { colorScheme, setColorScheme } = useColorScheme();
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  })

  const setDarkMode = (value: boolean) => {
    //setColorScheme(value ? 'dark' : 'light')
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    })
  }

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  }

  return (
    <CustomThemedView margin>
      <CustomThemedCard className='mt-5'>
        <CustomThemedSwitch
          text='Dark Mode'
          className='mb-5'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <CustomThemedSwitch
          text='System Mode'
          className='mb-5'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </CustomThemedCard>
    </CustomThemedView>
  );
};
export default ThemesScreen;
