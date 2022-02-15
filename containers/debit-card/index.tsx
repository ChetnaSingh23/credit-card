import { View, Text } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { styles } from  './debit.style';
import { appText } from './en';
import { Balance } from './Balance';
import { CustomBottomSheet } from '../../components/BottomSheet';
import React, { useEffect } from 'react';
import { DebitCardDetails } from './DebitCardDetails';
import { ScrollViewContainer } from './ScrollViewContainer';
import { ProgressBar } from '../../components/ProgressBar';

export default function DebitCard({ navigation , route}: RootTabScreenProps<'Credit'>) {
  const ScrollViewAndDebitCard = () => {
    return (<>
      <DebitCardDetails />
      {route.params?.amount && <ProgressBar progress={route.params?.amount || 0}/>}
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


