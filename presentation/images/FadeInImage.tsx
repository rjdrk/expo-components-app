import {
    View,
    StyleSheet,
    StyleProp,
    ActivityIndicator,
    ImageStyle,
    Animated
} from 'react-native'
import React, { useState } from 'react'
import useAnimation from '@/hooks/useAnimation';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {

    const [isLoading, setIsLoading] = useState(true);
    const { animatedOpcity, fadeIn } = useAnimation()

    return (
        <View style={styles.container}>
            {
                isLoading && (
                    <ActivityIndicator
                        style={styles.activity}
                        color={'gray'}
                        size={30}
                    />
                )
            }
            <Animated.Image
                source={{ uri }}
                style={[style, { opacity: animatedOpcity }]}
                onLoadEnd={() => {
                    fadeIn({});
                    setIsLoading(false)
                }}
            />
        </View>
    )
}

export default FadeInImage

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    activity: {
        position: 'absolute'
    },
})