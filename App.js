import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PatientScreen from './screens/ViewPatientScreen';
import PatientDetailScreen from './screens/PatientDetailScreen';
import PatientRegistrationScreen from './screens/PatientRegistrationScreen';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry,Text, Layout} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './custom-theme.json';
import TopNavigationDividerShowcase from './screens/ViewPatientScreen';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#c2cad0',
          },
          headerTintColor: '#4B729C',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ViewPatient" component={PatientScreen} />
            <Stack.Screen name="PatientDetailScreen" component={PatientDetailScreen} />
            <Stack.Screen name="PatientRegistrationScreen" component={PatientRegistrationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
