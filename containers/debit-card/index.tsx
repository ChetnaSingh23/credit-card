import { View, Text } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { styles } from  './debit.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appText } from './en';
import { Balance } from './Balance';
import { CustomBottomSheet } from '../../components/BottomSheet';
import React from 'react';
import { DebitCardDetails } from './DebitCardDetails';
import { ScrollViewContainer } from './ScrollViewContainer';
import { ProgressBar } from '../../components/ProgressBar';

export default function DebitCard({ navigation }: RootTabScreenProps<'Credit'>) {

  const ScrollViewAndDebitCard = () => {
    return (<>
      <DebitCardDetails />
      <ProgressBar/>
      <ScrollViewContainer  navigation={navigation} />
    </>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerWraper}>
        <Text style={styles.header}>{appText.title}</Text>
        <Text style={styles.title}>{appText.description}</Text>
        <Balance /> 
      </View>
      <CustomBottomSheet navigation={navigation} customComponent={<ScrollViewAndDebitCard />} />
    </View>
  );
}


