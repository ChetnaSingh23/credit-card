import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: "space-between",
    },
    containerWrpeer : {
      marginLeft: '10%',
    },
    header: {
      alignItems: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 20,
      top:'50%',
    },
    cashView : {
      display: 'flex',
      height:30,
      width: 50,
      borderRadius:5,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      color: Colors.white,
    },
    cashViewText :{
      fontSize: 20,
      fontWeight: 'bold',
    },
    balance:{
      marginLeft: 15,
    },
    balanceWrap : {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 30,
      margin: '10%',
    }
  });

  export const bottomSheetStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.appBackgroundColor,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 'bold',
    },
    box: {
      backgroundColor: Colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      bottom:0,
    },
    card: {
      height: 90,
      borderRadius: 20,
      elevation: 10,
      position: 'relative',
      top: -170,
      left: 20,
      backgroundColor: Colors.primary,
      padding: 20,
    },
    cardText: {
      color: Colors.white,
      fontSize: 25,
      fontWeight: "800",
      top: '2%',
      paddingLeft:10
    },
    cardNos : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      marginTop: '2%',
    },
    cardNo :{
      color: Colors.white,
      fontSize: 15,
      fontWeight: 'bold',
      
    },
    cvvWrap :{
      display: 'flex',
      flexDirection: 'row',
      padding: 15,
    },
    cVV : {
      marginLeft: '10%',
    },
    visLogo : {
      display: 'flex',
      justifyContent: "flex-start",
      marginLeft: '70%',
    },
    showCard: {
      height: 10,
      borderRadius: 10,
      elevation: 20,
      position: 'relative',
      top: -110,
      left: '49%' ,
      backgroundColor: Colors.white,
    },
    showCardNo : {
      color: Colors.primary,
      padding:`1%`,
    },
    cardDetail : {
      display: 'flex',
      flexDirection: 'row',
      padding:5
    },
    ellipis : {
      top: 6,
      fontWeight: 'bold',
      width: 6,
      height : 6,
      borderRadius: 6/2,
      backgroundColor: Colors.white,
      marginLeft: '5%',
    }
  });