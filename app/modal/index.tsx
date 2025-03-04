import CustomThemedButton from '@/presentation/shared/CustomThemedButton';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { Link, router } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
    <CustomThemedView >
      <Link asChild href={'/modal/modal-window'} className='mx-4'>
        <Text className='text-light-text dark:text-dark-text my-2 text-xl'>
          Abrir Modal
        </Text>
      </Link>

      <CustomThemedButton
        onPress={() => router.push('/modal/modal-window')}
        className='mx-4'
      >
        Abrir Modal
      </CustomThemedButton>
    </CustomThemedView>
  );
};
export default ModalScreen;
