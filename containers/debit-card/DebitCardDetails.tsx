import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { bottomSheetStyles } from './debit.style';
import { Octicons } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';
import { EllipsisView } from '../../components/EllipsisView';

const { width, height } = Dimensions.get('window');

export const DebitCardDetails =() => {
    const [isCardDetailVisible, setIsCarddetailVisible] = useState(true);
    
    const toggleCardDetails = () => {
        setIsCarddetailVisible(!isCardDetailVisible);
    }

    return <>
        <TouchableOpacity style={[bottomSheetStyles.showCard, {
          minHeight: 50,
          width: width * 0.4,
        }]} onPress={toggleCardDetails}>
          <View  style={bottomSheetStyles.cardDetail} >
            {isCardDetailVisible ? <Octicons name="eye" size={20} color={Colors.primary} /> : 
              <Octicons name="eye-closed" size={20} color={Colors.primary} />}
            <Text style={bottomSheetStyles.showCardNo}> {isCardDetailVisible ? 'Show' : 'Hide' } card number</Text>
          </View>
              
        </TouchableOpacity>
        <View style={[bottomSheetStyles.card, {
          minHeight: height * 0.3,
          width: width * 0.9,
        }]}>
          <View  style={bottomSheetStyles.visLogo}>
            <Image
              source={require('../../assets/images/aspire.png')}
            />
          </View>
          <Text style={bottomSheetStyles.cardText}>Chetna Singh</Text>
          <View style={bottomSheetStyles.cardNos}>
            {isCardDetailVisible ? <Text style={bottomSheetStyles.cardNo}>5 6 4 7</Text> : EllipsisView()}
            {isCardDetailVisible ? <Text style={bottomSheetStyles.cardNo}>3 4 1 1</Text> : EllipsisView()}
            {isCardDetailVisible ? <Text style={bottomSheetStyles.cardNo}>2 4 1 3</Text> : EllipsisView()}
            <Text style={bottomSheetStyles.cardNo}>2 0 2 0</Text>
          </View>
          <View style={bottomSheetStyles.cvvWrap}>
            <Text style={bottomSheetStyles.cardNo}>Thru: 12/20</Text>
            <Text style={[bottomSheetStyles.cardNo, bottomSheetStyles.cVV]}>CVV: {isCardDetailVisible ?  456 : '***'}</Text>
          </View>

          <View  style={bottomSheetStyles.visLogo}>
            <Image
              source={require('../../assets/images/visa.png')}
            />
          </View>   
        </View>
    </>
}