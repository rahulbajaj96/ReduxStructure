import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from '../container/Login';
import SignUp from '../container/SignUp';
import AppColors from '../utils/AppColors';
import store from '../store';
import {Provider} from 'react-redux';
import DashBoard from '../container/Dashboard';
import withLoader from '../hoc/withLoader';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          //   initialRouteName="Login"
          screenOptions={{
            headerShown: true,
            headerStyle: {backgroundColor: 'grey'},
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTintColor: AppColors.white,
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="DashBoard" component={withLoader(DashBoard)} />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default AppNavigation;
