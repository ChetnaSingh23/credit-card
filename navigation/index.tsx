/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image, Button } from 'react-native';
import { View } from '../components/Themed';

import Colors from '../constants/Colors';
import Credit from '../containers/Credit';
import DebitCard from '../containers/debit-card';
import { SpendingLimit } from '../containers/debit-card/SpendingLimit';
import Home from '../containers/Home';
import Payments from '../containers/Payments';
import Profile from '../containers/Profile';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40, marginLeft: 'auto' }}
      source={require('../assets/images/logo.png')}
    />
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const options ={ 
  title: '',
  headerShown: true,
  headerRight:  (props) => <LogoTitle {...props} /> ,
  headerBackTitleVisible: false,
  headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.appBackgroundColor,
      borderBottomColor: Colors.appBackgroundColor,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
      borderBottomWidth: 0 // Just in case.
    },
  }

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen name="SpendingLimit" component={SpendingLimit} options={options}   />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="DebitCard"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home }
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home"  size={24}  color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="DebitCard"
        component={DebitCard}
        options={Object.assign(options, {
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="credit-card-alt"  size={24} color={color}  />,
        })}
      />
      <BottomTab.Screen
        name="Payments"
        component={Payments}
        options={{
          title: 'Payments',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons  name="swap-horizontal-circle-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Credit"
        component={Credit}
        options={{
          title: 'Credit',
          tabBarIcon: ({ color }) => <TabBarIcon name="arrow-circle-up" size={24}  color={color} />, 
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" size={24}  color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
