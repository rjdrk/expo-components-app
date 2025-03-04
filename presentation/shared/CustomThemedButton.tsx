import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    className?: string;
    children: string;
}
const CustomThemedButton = ({ className, children, ...rest }: Props) => {
    return (
        <Pressable
            className={`bg-light-primary dark:bbg-dark-prymary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
            {...rest}
        >
            <Text className='text-white text-2xl'>{children}</Text>
        </Pressable>
    )
}

export default CustomThemedButton