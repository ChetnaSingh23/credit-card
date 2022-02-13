import { View, Text } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { styles } from  './debit.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appText } from './en';
import { Balance } from './Balance';
import { CustomBottomSheet } from './BottomSheet';

export default function DebitCard({ navigation }: RootTabScreenProps<'Credit'>) {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,}]}>
        <View style={styles.containerWrpeer}>
            <Text style={styles.header}>{appText.title}</Text>
            <Text style={styles.title}>{appText.description}</Text>
        </View>

        <Balance />        
    </View>
    <CustomBottomSheet isHidden={true}/>
    </>
  );
}


