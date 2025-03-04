import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
    const animatedOpcity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({
        duration = 300,
        toValue = 1,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => { }
    }) => {
        Animated.timing(animatedOpcity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,

        }).start(callback);


    }

    const fadeOut = ({
        duration = 300,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => { }
    }) => {
        Animated.timing(animatedOpcity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);

    }

    const startMovingTop = ({
        initialPosition = -100,
        duration = 300,
        toValue = 0,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => { }
    }) => {
        animatedTop.setValue(initialPosition);

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    }

    return {
        animatedTop,
        animatedOpcity,

        //Methods
        fadeIn,
        fadeOut,
        startMovingTop,
    }
}

export default useAnimation
