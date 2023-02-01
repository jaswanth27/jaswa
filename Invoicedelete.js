
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,Alert,ScrollView
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
export default function Invoiceupdate() {
  const [date, setDate] = useState(new Date())
  const [user, setUser] = useState({
    invoice_id: '',
   
  });


const onChangeid= (value) => {
  setUser({ ...user, invoice_id: value });
};


  const showAlert = () =>{
    Alert.alert(
       'Data Submited'
    )
 }

  async function saveData() {
       await fetch('https://lbkautospa.com/kryptos/k/delete.php', {
      method: 'POST',
      body: JSON.stringify(
        {
          invoice_id: user.invoice_id,
          
        }
      ),
      headers: {

        'Content-Type': 'application/json'
      }

    });

  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <TextInput
        placeholder={'invoiceid'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeid(value)}
        style={styles.input}
      /> 
      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'red', padding: 10 ,color:"red"}}>
          
          <Text style={{ color: 'white', textAlign: 'center'}}>Delete</Text>
       
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    padding: 8,
    margin: 15,
    overflow:"scroll"

  },

  input: {
      height: 40,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginVertical: 5,
      color:'black'
  },

});

