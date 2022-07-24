import * as React from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer, TabActions } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createAppContainer} from "@react-navigation/native"
import Ionicons from  'react-native-vector-icons/Ionicons';

import Home from "./src/pages/Home";
import User from './src/pages/User';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
      
        screenOptions={({route})=>({
          tabBarIcon:({focused, color, size}) => {
            let iconName;

            if (route.name === 'Gráficos'){
              iconName = focused
                ? 'stats-chart'
                : 'stats-chart-outline';
            } else if (route.name === 'Usuário') {
              iconName = focused 
                ? 'person'
                : 'person-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: "#2BA84A",
        tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Gráficos' component={Home} options={{headerShown: false}}/>
        <Tab.Screen name='Usuário' component={User} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



/*
const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} styles={styles.container}>
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
})*/