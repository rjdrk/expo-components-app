import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/presentation/menu/MenuItem';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { View } from 'react-native';

const ComponentsApp = () => {
  return (
    <CustomThemedView margin>
      {
        animationMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === animationMenuRoutes.length - 1}
          />
        ))
      }
      <View className='my-3' />
      {
        uiMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === animationMenuRoutes.length - 1}
          />
        ))
      }
      <View className='my-3' />

      {
        menuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === menuRoutes.length - 1}
          />
        ))
      }
    </CustomThemedView>
  );
};
export default ComponentsApp;
