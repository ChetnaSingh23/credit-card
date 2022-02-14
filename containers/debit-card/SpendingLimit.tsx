import { Button, Dimensions, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed';
import { spendingLimitStyle, styles } from  './debit.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appText } from './en';
import { CustomBottomSheet } from './BottomSheet';
import {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const SpendingDetail = (props: any) => {
  const [text, onChangeText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const updateText = (text: string) => {
    onChangeText(text);
    setIsVisible(true)
  }

    return <>
      <View style={[spendingLimitStyle.spendingLimitWrapper]}>
        <Ionicons name="speedometer-outline" size={20} color={Colors.primary} />
        <Text style={spendingLimitStyle.spendingLimitText}>{appText.spendingTitle}</Text>
      </View>
      <View style={spendingLimitStyle.inputWrapper}>
        <View style={styles.cashView}>
            <Text style={spendingLimitStyle.dollar}>S$</Text>
        </View>
          <SafeAreaView style={spendingLimitStyle.safeViewText}>
            <TextInput
              style={spendingLimitStyle.inputBox}
              onChangeText={onChangeText}
              value={text}
              clearTextOnFocus={true}
            />

          </SafeAreaView>

      </View>
      <Text style={spendingLimitStyle.spendingLimitSubText}>Here weekly means the last 7 day -not the calendar week</Text>

      <View style={spendingLimitStyle.cashLimit}>
        <TouchableOpacity style={spendingLimitStyle.buttonViewPrimary} onPress={ () => updateText('5000')} >
          <Text style={spendingLimitStyle.lightPrimaryText}>S$ 5,000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={spendingLimitStyle.buttonViewPrimary} onPress={ () => updateText('10,000')}>
          <Text style={spendingLimitStyle.lightPrimaryText}>S$ 10,000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={spendingLimitStyle.buttonViewPrimary} onPress={ () => updateText('20,000')}>
          <Text style={spendingLimitStyle.lightPrimaryText}>S$ 20,000</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          style={[spendingLimitStyle.button , {
            backgroundColor: isVisible ? Colors.primary : Colors.grey,

          }]}
          onPress={() => props.navigation.goBack()}
        >
          <Text>Save</Text>
        </TouchableOpacity>
  </>
}

export const SpendingLimit = (props: { navigation: any; }) => {
    const insets = useSafeAreaInsets();

    return (
      <>
        <View style={[styles.container, {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,}]}>
          <View style={styles.containerWrpeer}>
            <Text style={styles.header}>{appText.spendingLimit}</Text>
          </View>
        </View>
        <CustomBottomSheet  navigation={props.navigation} customComponent={<SpendingDetail navigation={props.navigation} />} />
      </>
    );
}
