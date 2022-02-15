import Constants from "expo-constants";
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
        <Text>$345|5000</Text>
        </View>
        <View style={styles.progressBar}><View style={styles.progress}></View></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: "column", //column direction
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
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
        backgroundColor: Colors.primary,
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 100/2
   },
   progress : {
       backgroundColor: Colors.white,
       width: '40%',
       height: 20,
       borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 100/2
   }
});