import React, { useRef, useState } from 'react';
import {
  Animated,
  View,
  PanResponder,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import {bottomSheetStyles} from './debit.style';
import { Octicons } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';
import { ScrollViewContainer } from './ScrollViewContainer';

const { width, height } = Dimensions.get('window');

export const CustomBottomSheet = (props: { isHidden : boolean }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [isCardDetailVisible, setIsCarddetailVisible] = useState(true);


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  const toggleCardDetails = () => {
    setIsCarddetailVisible(!isCardDetailVisible);
  }

  const ellipsisView =() => {
    return (
    <View style={{display:'flex', flexDirection:'row'}}>
      <View style={bottomSheetStyles.ellipis} />
      <View style={bottomSheetStyles.ellipis} />
      <View style={bottomSheetStyles.ellipis} />
      <View style={bottomSheetStyles.ellipis} />
    </View>)
  }

  return (
    <View style={bottomSheetStyles.container}>
        <Animated.View
          style={{
            transform: [{ translateY: pan.y }],
            position: 'absolute',
            bottom: 0,
          }}
          {...panResponder.panHandlers}>
          <View style={[bottomSheetStyles.box, {
              minHeight: height * 0.7,
              width,
            }]}>
            
            <View style={[bottomSheetStyles.showCard, {
              minHeight: height * 0.1,
              width: width * 0.4,
            }]}>
              <TouchableOpacity onPress={toggleCardDetails} style={bottomSheetStyles.cardDetail}>
                {isCardDetailVisible ? <Octicons name="eye" size={20} color={Colors.primary} /> : 
                  <Octicons name="eye-closed" size={20} color={Colors.primary} />}
                <Text style={bottomSheetStyles.showCardNo}> {isCardDetailVisible ? 'Show' : 'Hide' } card number</Text>
              </TouchableOpacity>
              
            </View>
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
                {isCardDetailVisible ? <Text style={bottomSheetStyles.cardNo}>5 6 4 7</Text> : ellipsisView()}
                {isCardDetailVisible ? <Text style={bottomSheetStyles.cardNo}>3 4 1 1</Text> : ellipsisView()}
                {isCardDetailVisible ? <Text style={bottomSheetStyles.cardNo}>2 4 1 3</Text> : ellipsisView()}
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
            <View>
            <ScrollViewContainer/>
          </View>
          </View>
        </Animated.View>
    </View>
  );
};



