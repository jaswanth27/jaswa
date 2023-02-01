import React ,{useState}from 'react';
import {View} from 'react-native';
import HomeScreen from '../HomeScreen';
import Location from '../location/Location';
import Invoice from '../invoice/Invoice';
import Bar from '../Barcode/Bar';
import Quickbooks from '../Quickbooks/Quickbooks';
import BarcodeScanner from '../Barcode/BarcodeScanner';
import Entypo from 'react-native-vector-icons/Entypo';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator
   
    screenOptions={{
    
      tabBarActiveTintColor:"green",
      tabBarInactiveTintColor:"grey",
      // tabBarActiveBackgroundColor:"blue",
      // tabBarInactiveBackgroundColor:"red",
        headerShown: false,  
        tabBarShowLabel:true,
    showLabel:false,
    tabBarStyle: {
      backgroundColor: '#02012e',
    },
  
    }}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen} 
        options={{
           tabBarLabel:"Home",
          
           tabBarIcon:({focused})=>
           (
            <View>
           <Entypo
            name={'home'}
            size={20}
            color="white"
          />
            </View>
           )
        }}/>

      <Tab.Screen name="Barcode" component={BarcodeScanner}
       options={{
        tabBarLabel:"Barcode",
        headerShown: true,
        tabBarIcon:()=>
        (
         <View>
        <Entypo
         name={'camera'}
         size={20}
         color="white"
       />
         </View>
        )
     }} 
     
      />
{/* 
<Tab.Screen name="Bar" component={Bar}
       options={{
        tabBarLabel:"Barcode",
        tabBarColor:"red",
        tabBarIcon:()=>
        (
         <View>
        <Entypo
         name={'camera'}
         size={20}
       />
         </View>
        )
     }} 
      
      /> */}
      {/* <Tab.Screen name="Quickbooks" component={Quickbooks}
       options={{
        tabBarLabel:"Quickbooks",
      
        tabBarIcon:()=>
        (
         <View>
        <Entypo
         name={'book'}
         size={20}
         color="white"
       />
         </View>
        )
     }} 
      
      /> */}
<Tab.Screen name="Invoice" component={Invoice} 
      
      options={{
        tabBarLabel:"Invoice",
        tabBarIcon:()=>
        (
         <View>
        <Entypo
         name={'list'}
         size={20}
         color="white"
       />
         </View>
        )
     }} 
      />
   
      {/* <Tab.Screen name="Location Details" component={Location} 
       options={{
        tabBarLabel:"Location",
        tabBarIcon:()=>
        (
         <View>
        <Entypo
         name={'location'}
         size={20}
         color="white"
       />
         </View>
        )
     }}
      
      /> */}
      
    
    </Tab.Navigator>
  );
}