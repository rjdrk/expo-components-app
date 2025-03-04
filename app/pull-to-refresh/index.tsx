import { useThemeColor } from '@/hooks/useThemeColor';
import CustomThemedText from '@/presentation/shared/CustomThemedText';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary');
  const backGroudndColor = useThemeColor({
    dark: 'black',
    light: 'white',
  }, 'background');

  const [isRefresing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false)
    }, 3000);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefresing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backGroudndColor}
        />
      }
    >

      <CustomThemedView margin>
        <CustomThemedText>PullToRefreshScreen</CustomThemedText>
      </CustomThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
