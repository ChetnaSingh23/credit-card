import React from "react";
import { View , Text, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export const ProgressBar = (props: any) => {
    return (
        <View style={styles.container}>
          <View style={styles.containerText}>
            <Text>
                Debit card spending limit 
            </Text>
            <View style={styles.amountWrapper} >
              <Text style={styles.primaryAmount}>$345 | </Text>
              <Text style={styles.totalAmount}>5000</Text>
            </View>
          </View>
          
          <View style={styles.progressBar}>
            <View style={styles.progress}></View>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
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