import { Switch, Pressable, View, Platform } from 'react-native'
import React from 'react'
import CustomThemedText from './CustomThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    text?: string;
    value: boolean;
    className?: string;
    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const CustomThemedSwitch = ({
    text,
    value,
    className,
    onValueChange
}: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary');
    return (
        <Pressable
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {text ? (<CustomThemedText type="h2">{text}</CustomThemedText>) : <View />}
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? switchActiveColor : ''}
                trackColor={{
                    false: 'grey',
                    true: switchActiveColor
                }}
            />
        </Pressable>
    )
}

export default CustomThemedSwitch