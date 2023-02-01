import React ,{useState}from 'react';
import Createinvoice from '../Createinvoice';
import Createinvoiceitem from '../Createinvoiceitem';
import Invoicecreation from '../invoice/Invoicecreation';
import Invoicedelete from '../invoice/Invoicedelete';
import Invoiceread from '../invoice/Invoiceread';
import Invoiceupdate from '../invoice/Invoiceupdate';
import Login from '../loginregister/Login';
import Register from '../loginregister/Register';
import HomeScreen from '../HomeScreen';
import Vindetails from '../Barcode/Vindetails';
import Bar from '../Barcode/Bar';
import BarcodeScanner from '../Barcode/BarcodeScanner';
import Location from '../location/Location';
import Invoice from '../invoice/Invoice';
import Tabnavigation from '../tabnavigator/Tabnavigation';
import Get from '../lbkinvoices/Get';
import Detail from '../lbkinvoices/Detail';
import Post from '../lbkinvoices/Post';
import Invoicedetail from '../lbkinvoices/Invoicedetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Stacknavigation()
{
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown: true
        }}>
      <Stack.Screen name="Login" component={Login}  options={{
          title: 'LUBBOCK',
          headerStyle: {
            backgroundColor: '#02012e',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
         <Stack.Screen name="Register" component={Register}  options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#02012e',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen name="Tabnavigation" component={Tabnavigation}  
        options={{
          title: 'Lubbock',
          headerStyle: {
            backgroundColor: '#02012e',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
       />

     
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="Barcode" component={BarcodeScanner} 
         options={{
          title: 'Barcode',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>


<Stack.Screen name="Vindetails" component={Vindetails}   options={{
          title: 'Vindetails',
          headerStyle: {
            backgroundColor: '#02012e',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Invoicecreation" component={Invoicecreation}   options={{
          title: 'Invoicecreation',
          headerStyle: {
            backgroundColor: '#02012e',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Invoiceread" component={Invoiceread}   options={{
          title: 'Invoiceread',
          headerStyle: {
            backgroundColor: '#02012e',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Invoicedelete" component={Invoicedelete}   options={{
          title: 'Invoicecreation',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Invoiceupdate" component={Invoiceupdate}   options={{
          title: 'Invoicecreation',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
  <Stack.Screen name="Invoicedetail" component={Invoicedetail}   options={{
          title: 'Invoicedetail',
          headerStyle: {
            backgroundColor: '#02012e',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
<Stack.Screen name="Get" component={Get}   options={{
          title: 'Invoicecreation',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

<Stack.Screen name="Post" component={Post}   options={{
          title: 'Invoicecreation',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

<Stack.Screen name="Detail" component={Detail}   options={{
          title: 'Invoicecreation',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        {/* <Stack.Screen name="About" component={About} /> */}
      </Stack.Navigator>
    )
}