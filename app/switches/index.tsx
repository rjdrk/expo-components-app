import CustomThemedCard from '@/presentation/shared/CustomThemedCard';
import CustomThemedSwitch from '@/presentation/shared/CustomThemedSwitch';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })
  return (
    <CustomThemedView margin className='mt-2'>
      <CustomThemedCard>
        <CustomThemedSwitch
          text='Activo'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-4'
        />
        <CustomThemedSwitch
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='mb-4'
        />
        <CustomThemedSwitch
          text='Feliz'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-4'
        />
      </CustomThemedCard>
    </CustomThemedView>
  );
};
export default Switches;
