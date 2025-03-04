import { View, Pressable } from 'react-native'
import React from 'react'
import { Href, router } from 'expo-router';
import CustomThemedText from '../shared/CustomThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;
    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({
    title,
    icon,
    name,
    isFirst = false,
    isLast = false,
}: Props) => {
    const [routeName] = name.split('/');
    const primaryColor = useThemeColor({}, 'primary')
    return (
        <Pressable
            onPress={() => router.push(routeName as Href)}
            className='bg-white dark:bg-black/15 px-5 py-2'
            style={{
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    padding: 10,
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10,
                })
            }}
        >
            <View className="flex-row items-center">
                <Ionicons
                    name={icon}
                    size={30}
                    color={primaryColor}
                    className="mr-5"
                />
                <CustomThemedText type="h2"> {title} </CustomThemedText>
            </View>
        </Pressable>
    )
}

export default MenuItem