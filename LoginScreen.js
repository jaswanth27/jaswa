import React from 'react';
import { ImageBackground ,View,Text,TextInput,Button} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const image = { uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg" };
import {
  Dropdown }
  from 'react-native-material-dropdown';
  
  let data =[

    {
      value:"a"
    },
    {
      value:"b"
    },
    {
      value:"c"
    }
  ]
const LoginScreen = ({navigation}) => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
          {/* <Icon name="ios-person" color={"red"} size={25}/>
          <Icon name="rocket" size={30} color="#900" /> 
          <FontAwesomeIcon name="github" size={16} color="red"></FontAwesomeIcon>  */}
           <Text style={{fontWeight:"bold",fontSize:30,position:'absolute',top:120,left:100}}>LOGIN PAGE</Text>
        <View style={{alignContent:"center",alignItems:"center",justifyContent:"center",position:"absolute",width:260,height:260,top:200,left:50,color:"white"}}>
       
        <View>
      
         <Text style={{fontWeight:"bold",fontSize:20}}>Username</Text>
         <TextInput autoComplete='email' placeholder = "Username"  keyboardType="email-address" placeholderTextColor = "black"/>

          </View>  
          <View>
          
         <Text style={{fontWeight:"bold",fontSize:20}}>Password</Text>
         <TextInput  textContentType={'password'}
          
          
          autoCompleteType={'password'}
          clearButtonMode={'while-editing'}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          placeholder={'Password'}
          placeholderTextColor = "black"
          secureTextEntry={true}
         />

          </View>  

          <Button
        title="Login"
        color="green"
        onPress={() => navigation.navigate('HomeTabs')}
      />


          </View>
        </ImageBackground>
        //  <ImageBackground source={require('./pexels-matheus-bertelli-799443.jpg')} resizeMode="cover" style={{flex:1}}>
        //  </ImageBackground>
        //   <ImageBackground source={require('./j.png')} resizeMode="cover" style={{flex:1}}>
        //   </ImageBackground>
        //    <ImageBackground source={require('./pexels-jiarong-deng-1034662.jpg')} resizeMode="cover" style={{flex:1}}>

              
        //                            </ImageBackground>
     
         
           
           
        
   
    );
  };
  export default LoginScreen;