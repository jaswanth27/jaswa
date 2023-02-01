import React, { Component } from 'react';
import { View, TextInput, Button, TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        user_id : '',
        password : '',
      confirmPw : '',
      check_textInputChange : false,
      secureTextEntry : true,
      confirmSecureTextEntry : true
    };
  }
  
  InsertRecord=()=>{
    var user_id = this.state.user_id;
    var password = this.state.password;
    var ConfirmPw = this.state.confirmPw;
    //var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
    if ((user_id.length==0) || (password.length==0) || (ConfirmPw.length==0)){
      alert("Required Field Is Missing!!!");
    }
    // else if (!(checkEmail).test(user_id)){
    //   alert("invalid email!!!");
    // }
    // // Password validations
    // else if (password.length<8){
    //   alert("Minimum 08 characters required!!!");
    // }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password))){
    //   alert("Use atleast 01 special character!!!");
    // }else if (((/[ ]/).test(password))){
    //   alert("Don't include space in password!!!");
    // }else if(password !== ConfirmPw){
    //   alert("Password doesnot match!!!");
    // }
    
    
    else{
      var InsertAPIURL = "https://lbkautospa.com/kryptos/k/SignUp.php";   //API to render signup

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      
      var Data ={
        user_id: user_id,
        password: password
      };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL,{
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      // alert(response[0].Message);       // If data is in JSON => Display alert msg
      this.props.navigation.navigate("Login"); //Navigate to next screen if authentications are valid
    })
    .catch((error)=>{
        alert("Error Occured" + error);
    })
    }
  }
  
  updateSecureTextEntry(){
    this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry
    });
  }

  updateConfirmSecureTextEntry(){
    this.setState({
        ...this.state,
        confirmSecureTextEntry: !this.state.confirmSecureTextEntry
    });
}

  render() {
    return (
      <ImageBackground source={require('./b.jpg')} resizeMode="cover" style={{flex:1}}>
      <View style={styles.viewStyle}>
        <TextInput
                placeholder="Enter Email"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={user_id=>this.setState({user_id})}
                />
                
            <TextInput
                placeholder="Enter Password"
                placeholderTextColor="black"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles.textInput}
                onChangeText={password=>this.setState({password})}
                />
                 
            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={confirmPw=>this.setState({confirmPw})}
                secureTextEntry={this.state.confirmSecureTextEntry ? true : false}
                
            /> 
           
            <Button
                title="Register"
                onPress={()=>{
                  this.InsertRecord()
                }}
                />
      </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        padding: 20,
        marginTop: 100,
    },
    textInput:{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginBottom: 50,
      height: 50,
      fontSize: 20,
      
      color: 'black',
    }
})
