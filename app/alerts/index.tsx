import CustomThemedButton from '@/presentation/shared/CustomThemedButton';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { Alert } from 'react-native';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  return (
    <CustomThemedView margin>
      <CustomThemedButton className='my-5' onPress={createTwoButtonAlert} >2-Button Alert</CustomThemedButton>
      <CustomThemedButton className='mb-5' onPress={createThreeButtonAlert} >3-Button Alert</CustomThemedButton>
    </CustomThemedView>
  );
};
export default AlertsScreen;
