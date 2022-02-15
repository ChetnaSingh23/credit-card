import React from 'react';
import {
  View,
} from 'react-native';
import { bottomSheetStyles } from '../containers/debit-card/debit.style';

export const CustomBottomSheet = (props: { navigation: any, customComponent :any, customStyle?:any  }) => {
  return (
      <View style={bottomSheetStyles.container}>
        <View style={[bottomSheetStyles.bottomsheet, {...props.customStyle}]}>
          {props.customComponent}
        </View>
      </View>
  );
}
