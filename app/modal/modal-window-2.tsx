import { View, Text, Platform } from 'react-native'
import React from 'react'
import CustomThemedView from '@/presentation/shared/CustomThemedView'
import CustomThemedText from '@/presentation/shared/CustomThemedText'
import { StatusBar } from 'expo-status-bar'
import CustomThemedButton from '@/presentation/shared/CustomThemedButton'
import { router } from 'expo-router'

const ModalWindow2 = () => {
    return (
        <CustomThemedView
            className='justify-center items-center flex-1'
        >
            <CustomThemedText>Hola, Soy otro Modal</CustomThemedText>
            <StatusBar
                style={Platform.OS === 'ios' ? 'light' : 'auto'}
            />
            <CustomThemedButton
                onPress={() => router.dismiss()}
            >
                Cerrar
            </CustomThemedButton>
        </CustomThemedView>
    )
}

export default ModalWindow2