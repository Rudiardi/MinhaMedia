import * as React from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Home from "./src/pages/Home";
import User from './src/pages/User';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} styles={styles.container} >
        <Tab.Screen name= "Gráficos"component={Home} />
        <Tab.Screen name= "Usuário"component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container:{
      color: "#2BA84A"
    }
})