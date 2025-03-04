import useAnimation from '@/hooks/useAnimation';
import CustomThemedButton from '@/presentation/shared/CustomThemedButton';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

const Animation101Screen = () => {

  const { animatedOpcity, animatedTop, fadeIn, fadeOut, startMovingTop } = useAnimation()

  return (
    <CustomThemedView margin className='justify-center items-center flex-1'>
      <Animated.View
        className='bg-light-secondary dark: bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpcity,
          transform: [{
            translateY: animatedTop
          }]
        }}
      />
      <CustomThemedButton
        className='my-5'
        onPress={() => {
          fadeIn({});
          startMovingTop({
            easing: Easing.bounce,
            duration: 700
          });
        }}
      >
        FadeIn
      </CustomThemedButton>
      <CustomThemedButton
        className='my-5'
        onPress={() => fadeOut({})}
      >
        FadeOut
      </CustomThemedButton>
    </CustomThemedView>
  );
};
export default Animation101Screen;
