import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "../../components/Themed";
import { spendingLimitStyle, styles } from "./debit.style";
import { appText } from "./en";
import { CustomBottomSheet } from "../../components/BottomSheet";
import {  useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const SpendingDetail = (props: any) => {
  const [text, onChangeText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const updateText = (text: string) => {
    onChangeText(text);
    setIsVisible(true);
  };

  const processSelectedAmount = () => {
    props.navigation.navigate('DebitCard', {
      amount: text 
    });
  }
  
  return (
    <>
      <View style={[spendingLimitStyle.spendingLimitWrapper]}>
        <Ionicons name="speedometer-outline" size={20} color={Colors.primary} />
        <Text style={spendingLimitStyle.spendingLimitText}>
          {appText.spendingTitle}
        </Text>
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
      <Text style={spendingLimitStyle.spendingLimitSubText}>
        Here weekly means the last 7 day -not the calendar week
      </Text>

      <View style={spendingLimitStyle.cashLimit}>
        <TouchableOpacity
          style={spendingLimitStyle.buttonViewPrimary}
          onPress={() => updateText("5000")}
        >
          <Text style={spendingLimitStyle.lightPrimaryText}>S$ 5,000</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={spendingLimitStyle.buttonViewPrimary}
          onPress={() => updateText("10000")}
        >
          <Text style={spendingLimitStyle.lightPrimaryText}>S$ 10,000</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={spendingLimitStyle.buttonViewPrimary}
          onPress={() => updateText("20000")}
        >
          <Text style={spendingLimitStyle.lightPrimaryText}>S$ 20,000</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          spendingLimitStyle.button,
          {
            backgroundColor: isVisible ? Colors.primary : Colors.grey,
          },
        ]}
        onPress={processSelectedAmount}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </>
  );
};

export const SpendingLimit = (props: { navigation: any }) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerWraper}>
        <Text style={styles.header}>{appText.spendingLimit}</Text>
      </View>
      <CustomBottomSheet
        navigation={props.navigation}
        customStyle={{ height: "95%" }}
        customComponent={<SpendingDetail navigation={props.navigation} />}
      />
    </View>
  );
};
