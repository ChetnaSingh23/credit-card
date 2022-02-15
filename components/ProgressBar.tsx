import React from "react";
import { View , Text, StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import { appText } from "./en";

//Implement progress bar value by adding prev value to current dynamically

export const ProgressBar = (props: any) => {
  const { progress } = props;
    return (
        <View style={styles.container}>
          <View style={styles.containerText}>
            <Text>
                {appText.spendinglimitTitle}
            </Text>
            <View style={styles.amountWrapper} >
              <Text style={styles.primaryAmount}>${progress} | </Text>
              <Text style={styles.totalAmount}>500000</Text>
            </View>
          </View>
          
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width:  progress ? `(${progress/500000})%` : '1%'}]}></View>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '34%',
  },
  containerText:{
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-between',
      width: '88%',
  },
    progressBar: {
      marginTop: 10,
      height: 20,
      width: '90%',
      backgroundColor: Colors.primaryCoolLight,
      borderWidth: 0.1,
      borderRadius: 100/2,
      borderColor: Colors.primaryLight,
  },
  progress : {
    height: 10,
    width:'40%',
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: "transparent",
    borderTopColor:  Colors.primary,
    borderTopLeftRadius: 100/2,
    borderBottomLeftRadius: 100/2,
  },
  primaryAmount : {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  totalAmount : {
    color: Colors.grey,
    fontSize: 12,
    fontWeight: 'bold',
  },
  amountWrapper : {
    display: 'flex',
    flexDirection: "row",
  }
});