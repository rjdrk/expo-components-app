import CustomThemedCard from '@/presentation/shared/CustomThemedCard';
import CustomThemedText from '@/presentation/shared/CustomThemedText';
import CustomThemedTextInput from '@/presentation/shared/CustomThemedTextInput';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const isIOS = Platform.OS === 'ios';

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'height' : undefined}
    >
      <ScrollView>
        <CustomThemedView margin>
          <CustomThemedCard className='mb-5'>
            <CustomThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <CustomThemedTextInput
              placeholder='Correo Electrónico'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <CustomThemedTextInput
              placeholder='Número de Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </CustomThemedCard>
          <CustomThemedCard className='my-2'>
            <CustomThemedText>
              {JSON.stringify(form, null, 2)}
            </CustomThemedText>
          </CustomThemedCard>
          <CustomThemedCard className='my-2'>
            <CustomThemedText>
              {JSON.stringify(form, null, 2)}
            </CustomThemedText>
          </CustomThemedCard>
          <CustomThemedCard className='my-2'>
            <CustomThemedText>
              {JSON.stringify(form, null, 2)}
            </CustomThemedText>
          </CustomThemedCard>
          <CustomThemedCard className='my-2'>
            <CustomThemedText>
              {JSON.stringify(form, null, 2)}
            </CustomThemedText>
          </CustomThemedCard>
          <CustomThemedCard className='my-2'>
            <CustomThemedText>
              {JSON.stringify(form, null, 2)}
            </CustomThemedText>
          </CustomThemedCard>
          <CustomThemedCard className='my-2'>
            <CustomThemedText>
              {JSON.stringify(form, null, 2)}
            </CustomThemedText>
          </CustomThemedCard>
          <CustomThemedCard
            className='my-2'
          /*style={{
            marginBottom: isIOS ? 100 : 10,
          }}*/
          >
            <CustomThemedTextInput
              placeholder='Número de Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </CustomThemedCard>
          {isIOS && <View style={{ marginBottom: 100 }} />}
        </CustomThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
