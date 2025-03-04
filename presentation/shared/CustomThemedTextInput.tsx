import { TextInputProps, TextInput } from 'react-native'
import React from 'react'

interface Props extends TextInputProps {
    className?: string
}

const CustomThemedTextInput = ({
    className,
    ...rest
}: Props) => {
    return (
        <TextInput
            className={`py-4 text-black dark:text-white ${className}`}
            placeholderTextColor={'grey'}
            {...rest}
        />
    )
}

export default CustomThemedTextInput