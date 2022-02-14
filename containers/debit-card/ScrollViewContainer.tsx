import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Switch } from 'react-native';
import Colors from '../../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Top-up Account',
    icon: <Feather name="upload" size={20} color={Colors.primary} />
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Weekly spending limit',
    icon: <Ionicons name="speedometer-outline" size={20} color={Colors.primary} />,
    isSwitch: true,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Freeze Card',
    icon: <Ionicons name="ios-snow" size={20} color={Colors.primary} />,
    isSwitch: true,

  },
  {
    id: '58694a0f-3da1-43271f-bd96-145571e29d72',
    title: 'Get a new Card',
    icon: <Ionicons name="ios-snow" size={20} color={Colors.primary} />

  },
  {
    id: '58694a0f-3da1-47111f-bd96-145571e29d72',
    title: 'Deactivate Card',
    icon: <Ionicons name="ios-snow" size={20} color={Colors.primary} />

  },
];


const Item = ({ title , icon,  isSwitch, navigation}) =>  {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    navigation.navigate('SpendingLimit', { navigation })
  };

return (
  <View style={styles.item}>
    <View style={styles.circleView}>
      {icon}
    </View>
    <Text style={styles.title}>{title}</Text>
    {isSwitch && <Switch
        style={styles.switch}
        trackColor={{ false: Colors.tertiary, true: Colors.primary }}
        thumbColor={isEnabled ? Colors.white : '#f4f3f4'}
        ios_backgroundColor={Colors.white}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />}
  </View>
);
}

export const ScrollViewContainer = (props:any) => {
  const renderItem = ({ item }) => <Item key={item.id} title={item.title} icon={item.icon} isSwitch={item.isSwitch} navigation={props.navigation} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '25%'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 12,
    padding: 10,
  },
  circleView: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor:Colors.appBackgroundColor,
  },
  switch: {
    marginLeft: 'auto',
  }
});
