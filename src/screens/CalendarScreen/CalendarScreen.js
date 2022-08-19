import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import AgendaScreen from '../AgendaScreen';
import MonthlyScreen from '../MonthlyScreen';



function WeekScreen() {
  return (
    <AgendaScreen />
  );
}
function MonthScreen() {
  return(
    <MonthlyScreen />
  );
}

const CalendarScreen = () => {
  
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Weekly" component={WeekScreen} />
        <Tab.Screen name="Month" component={MonthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default CalendarScreen;