import React from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import RootStackScreen from './views/screens/RootStackScreen';
import {DrawerContent} from './views/screens/DrawerContent';

import MainTabScreen from './views/dashboard/MainTabScreen';
import SupportScreen from './views/dashboard/SupportScreen';
import SettingsScreen from './views/dashboard/SettingsScreen';
import BookmarkScreen from './views/dashboard/BookmarkScreen';

const Drawer = createDrawerNavigator();

const App = props => {
  const {stateGlobal} = props;

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme =
    stateGlobal.isTheme === true ? CustomDarkTheme : CustomDefaultTheme;

  if (stateGlobal.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {stateGlobal.signIn.token ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

const mapStateToProps = state => {
  return {
    stateGlobal: state.Global,
  };
};

export default connect(mapStateToProps)(App);
