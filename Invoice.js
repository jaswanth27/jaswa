import  React  from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View,Button,StyleSheet, Pressable ,Text} from 'react-native';
import Createinvoice from './Createinvoice';
import Readinvoice from './Readinvoice';
import Updateinvoice from './Updateinvoice';
import Deleteinvoice from './Deleteinvoice';
import Createinvoiceitem from './Createinvoiceitem';
import Lubbockinvoice from './Lubbockinvoice';
import Entypo from 'react-native-vector-icons/Entypo';
const Stack = createNativeStackNavigator();
function Invoice() {
    
    return (
        <Stack.Navigator>
             <Stack.Screen name="Homeinvoice" component={Homeinvoice}
             
             options={{
              title: 'Homeinvoice',
              headerStyle: {
                backgroundColor: '#1a3e75',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
        <Stack.Screen name="Readinvoice" component={Readinvoice} 
         options={{
          title: 'Readinvoice',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Updateinvoice" component={Updateinvoice} 
         options={{
          title: 'Updateinvoice',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Deleteinvoice" component={Deleteinvoice} 
         options={{
          title: 'Deleteinvoice',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Createinvoiceitem" component={Createinvoiceitem} 
         options={{
          title: 'Createinvoiceitem',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Createinvoice" component={Createinvoice}
         options={{
          title: 'Createinvoice',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
         <Stack.Screen name="Lubbockinvoice" component={Lubbockinvoice}
         options={{
          title: 'Lubbockinvoice',
          headerStyle: {
            backgroundColor: '#1a3e75',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        </Stack.Navigator >
    );
  }
  export default Invoice;
  function Homeinvoice({navigation}) {
    return (
      <View style={styles.contentView}>
        {/* <Button
          title="Createinvoice" 
          onPress={() => navigation.navigate('Createinvoice')}
          color="green"
        />
         <Button
          title="Createvin"
          color="green"
          onPress={() => navigation.navigate('Createinvoiceitem')}
        />
        <Button
          title="Readinvoice"
          color="blue"
          onPress={() => navigation.navigate('Readinvoice')}
        />
        <Button
          title="Lubbockinvoice"
          color="blue"
          onPress={() => navigation.navigate('Lubbockinvoice')}
        /> */}
          {/* <Button
          title="CREATE INVOICE"
          color="green"
          onPress={() => navigation.navigate('Invoicecreation')}
          style={styles.b1}
        />
          <Button
          title="VIEW INVOICE"
          color="blue"
          onPress={() => navigation.navigate('Invoiceread')}
        />
          <Button
          title="EDIT INVOICE"
          color="blue"
          onPress={() => navigation.navigate('Invoiceupdate')}
        />
        <Button
          title="DELETE INVOICE"
          color="red"
          onPress={() => navigation.navigate('Invoicedelete')}
        /> */}
         <Pressable
        style={styles.b1}
          onPress={() => navigation.navigate('Invoicecreation')}
        >
          <Text style={{color:"black"}}>create</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={20}
       />
          </Pressable>
          <Pressable
        style={styles.b2}
          onPress={() => navigation.navigate('Invoiceread')}
        >
          <Text style={{color:"black"}}>view</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={20}
       />
          </Pressable>
          <Pressable
        style={styles.b3}
          onPress={() => navigation.navigate('Invoiceupdate')}
        >
          <Text style={{color:"black"}}>edit</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={20}
       />
          </Pressable>
         <Pressable
        style={styles.b4}
          onPress={() => navigation.navigate('Invoicedelete')}
        >
          <Text style={{color:"black"}}>delete</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={20}
       />
          </Pressable>


{/* <Button
          title="Updateinvoice"
          onPress={() => navigation.navigate('Updateinvoice')}
        />
        <Button
          title="Deleteinvoice"
          onPress={() => navigation.navigate('Deleteinvoice')}
        /> */}
      </View>
    );
  }



  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
     // backgroundColor:'#ADD8E6',
     borderBottomColor:"black"
    },
    b1: 
    {
     backgroundColor:"#4B75E9",
    width:360,
    height:120,
  position: 'absolute',
  top:10,
    color:"white",
    justifyContent :'center'
    },
    b2: 
    {
     backgroundColor:"#70BDC2",
    width:360,
    height:120,
     position: 'absolute',
  top:130,
    color:"white",
    justifyContent :'center'
    },
    b3: 
    {
     backgroundColor:"#4B75E9",
    width:360,
    height:120,
  position: 'absolute',
  bottom:130,
    color:"white",
    justifyContent :'center'
    },
    b4: 
    {
     backgroundColor:"#70BDC2",
    width:360,
    height:120,
  position: 'absolute',
  bottom:10,
    color:"white",
    justifyContent :'center'
    }
  });