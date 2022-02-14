import React, { useRef } from 'react';
import {
  Animated,
  View,
  PanResponder,
  Dimensions,
} from 'react-native';
import { bottomSheetStyles } from './debit.style';

const { width, height } = Dimensions.get('window');

export const CustomBottomSheet = (props: { navigation: any, customComponent :any  }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          y: pan.y._value,
          x: 0
        });
      },
      onPanResponderMove: Animated.event([null, { dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  
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
              {props.customComponent}
          </View>
        </Animated.View>
    </View>
  );
};



