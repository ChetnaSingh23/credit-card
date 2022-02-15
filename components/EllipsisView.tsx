import React from 'react';
import {
    View,
  } from 'react-native';
import { bottomSheetStyles } from '../containers/debit-card/debit.style';

export const EllipsisView =() => {
    return (
    <View style={{display:'flex', flexDirection:'row'}}>
      <View style={bottomSheetStyles.ellipis} />
      <View style={bottomSheetStyles.ellipis} />
      <View style={bottomSheetStyles.ellipis} />
      <View style={bottomSheetStyles.ellipis} />
    </View>)
  }