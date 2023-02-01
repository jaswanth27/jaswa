import  React  from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View,StyleSheet, Pressable ,Text,ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const Stack = createNativeStackNavigator();
function Invoice() {
    
    return (
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        >
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
      
        </Stack.Navigator >
    );
  }
  export default Invoice;
  function Homeinvoice({navigation}) {
    return (
      <ImageBackground source={require('./b.jpg')} resizeMode="cover" style={{flex:1}}>
      <View style={styles.contentView}>
      
         <Pressable
        style={styles.b1}
          onPress={() => navigation.navigate('Invoicecreation')}
        >
          <Text style={{color:"black",fontSize:25}}>CREATE INVOICE</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={30}
         style={{color:"black",position:'absolute',right:0}}
       />
          </Pressable>
          <Pressable
        style={styles.b2}
          onPress={() => navigation.navigate('Invoiceread')}
        >
          <Text style={{color:"black",fontSize:25}}>VIEW INVOICE</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={30}
         style={{color:"black",position:'absolute',right:0}}
       />
          </Pressable>
          {/* <Pressable
        style={styles.b3}
          onPress={() => navigation.navigate('Invoiceupdate')}
        >
          <Text style={{color:"black"}}>edit</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={20}
       />
          </Pressable> */}
         {/* <Pressable
        style={styles.b4}
          onPress={() => navigation.navigate('Invoicedelete')}
        >
          <Text style={{color:"white"}}>delete</Text>
          <Entypo
         name={'arrow-with-circle-right'}
         size={20}
       />
          </Pressable> */}
      </View>
      </ImageBackground>
    );
  }



  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      // backgroundColor:'#13c2c2',
      // backgroundColor:'white',
      //FE6A5B
     borderBottomColor:"black"
    },
    b1: 
    {
    // backgroundColor:"#02012e",
    width:360,
    height:120,
  position: 'absolute',
  top:10,
    color:"white",
    justifyContent :'center'
    },
    b2: 
    {
    // backgroundColor:"#002329",
    width:360,
    height:120,
  position: 'absolute',
  top:130,
    color:"white",
    justifyContent :'center'
    },
    b3: 
    {
    backgroundColor:"aqua",
    width:360,
    height:120,
  position: 'absolute',
  bottom:130,
    color:"white",
    justifyContent :'center'
    },
    b4: 
    {
    backgroundColor:"red",
    width:360,
    height:120,
  position: 'absolute',
  bottom:10,
    color:"white",
    justifyContent :'center'
    }
  });