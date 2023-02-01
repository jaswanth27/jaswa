import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
//const image = { uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg" };
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_id : '',
        password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  InsertRecord=()=>{
    var user_id = this.state.user_id;
    var password = this.state.password;

    if ((user_id.length==0) || (password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "https://lbkautospa.com/kryptos/k/login.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        user_id: user_id,
        password: password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        // alert(Response[0].Message)
        if (Response[0].Message == "Success") {
          console.log("true")
          this.props.navigation.navigate("Tabnavigation");
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })
    }
  }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    return (
        // <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
<ImageBackground source={require('./b.jpg')} resizeMode="cover" style={{flex:1}}>
<View style={styles.viewStyle}>
    <Text style={{color:"black",fontWeight: 'bold',
    fontSize: 25}}>Login Page</Text>
          <View style={styles.action}>
          <Entypo
                  name="mail"
                  color="black"
                  size={20}
 style={{color:"black",position:'absolute',right:0}}
                  />
            <TextInput
              placeholder="Username"
              placeholderTextColor="black"
              style={styles.textInput}
              
              onChangeText={user_id=>this.setState({user_id})}
              />

          </View>

          <View style={styles.action}>
            <TextInput
              placeholder=" Password"
              placeholderTextColor="black"
              style={styles.textInput}
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}>
                  {this.state.secureTextEntry ?
                  <Entypo
                  name="eye"
                  color="grey"
                  size={20}
                  />
                :  
                  <Entypo
                  name="eye"
                  color="black"
                  size={20}
                  />
                }
                </TouchableOpacity>  
          </View>


                {/* Button */}

                <View style={styles.loginButtonSection}>    
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.InsertRecord()
                    }}
                    >
                      <Text style={styles.text}> LOGIN</Text>
                  </Pressable>
                </View>

                <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                        this.props.navigation.navigate("Register");
                    }}
                    >
                      <Text style={styles.text}>Create new Account</Text>
                    </Pressable>
                  </View>
      </View>
        </ImageBackground>
      
    );
  }
}
const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 50,
        height: 50,
        fontSize: 20,
        flex: 1,
        color: 'black',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 150,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    action: {
      flexDirection: 'row',
      marginTop: 50,
      paddingBottom: 5,
      width: '90%'
  },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        textTransform: 'uppercase',
        
        
      },
      loginButtonSection: {
        width: '100%',
        // height: '30%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
     },
     loginButton: {
       backgroundColor: '#06baab',
       color: 'white',
       height: 35,
       justifyContent: 'center', //up dwn
       alignItems: 'center',  //r & l
       width: '70%',
       borderRadius: 10,

     }
})
