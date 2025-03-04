import { View, ViewProps } from 'react-native'
import React from 'react'

interface Props extends ViewProps {
    className?: string;
}
const CustomThemedCard = ({ className, children, ...rest }: Props) => {
    return (
        <View
            className={`bg-white dark:bg-black/10 rounded-xl, shadow-black/5 ${className}`}
            {...rest}
        >
            {children}
        </View>
    )
}

export default CustomThemedCard