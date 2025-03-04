import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImag from '@/presentation/images/FadeInImage';
import FadeInImage from '@/presentation/images/FadeInImage';
import CustomThemedText from '@/presentation/shared/CustomThemedText';
import CustomThemedView from '@/presentation/shared/CustomThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])
  const primaryColor = useThemeColor({}, 'primary')

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000)
  }

  return (
    <CustomThemedView >
      <FlatList
        data={numbers}
        renderItem={({ item }) => <LisItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View
            style={{ height: 150, justifyContent: 'center' }}
          >
            <ActivityIndicator
              size={40}
              color={primaryColor}
            />
          </View>
        )}
      />
    </CustomThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const LisItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%'
      }}
    />
  )
}