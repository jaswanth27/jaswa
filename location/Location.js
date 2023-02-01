import React, { useState } from 'react';
import {
  
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  
  Text,
  ScrollView,
  
} from 'react-native';

export default function Location() {
  const [user, setUser] = useState({
    customer_name: '',
    address_1: '',
    address_2: '',
    address_3: '',
    city:'',
    state:'',
    zipcode:'',
    phone:''

  });
 

  const onChangeName = (value) => {
    setUser({ ...user, customer_name: value });
  };
 
  const onChangeaddress_1 = (value) => {
    setUser({ ...user, address_1: value });
  };

  const onChangeaddress_2 = (value) => {
    setUser({ ...user, address_2: value });
  };

  const onChangeaddress_3 = (value) => {
    setUser({ ...user, address_3: value });
  };
  const onChangezipcode = (value) => {
    setUser({ ...user, zipcode: value });
  };
  const onChangecity = (value) => {
    setUser({ ...user, city: value });
  };
  const onChangestate = (value) => {
    setUser({ ...user, state: value });
  };
  const onChangephone = (value) => {
    setUser({ ...user, phone: value });
  };
  const showAlert = () =>{
    Alert.alert(
       'Data Submited'
    )
 }

  

  async function saveData() {
   
    
       await fetch('https://lbkautospa.com/kryptos/k/createcustomer.php', {
      method: 'POST',
      body: JSON.stringify(

        {
          customer_name: user.customer_name,
          address_1: user.address_1,
          address_2: user.address_2,
          address_3: user.address_3,
          city: user.city,
          state:user.state,
          zipcode: user.zipcode,
          phone: user.phone

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
        <Text>CustomerName</Text>
      <TextInput
        placeholder={'customer_name'}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />
      <Text>Address1</Text>
      <TextInput
        placeholder={'address_1'}
        onChangeText={(value) => onChangeaddress_1(value)}
        style={styles.input}
      />
    <Text>Address2</Text>
      <TextInput
        placeholder={'address_2'}
        onChangeText={(value) => onChangeaddress_2(value)}
        style={styles.input}
      />
      <Text>Address3</Text>
      <TextInput
        placeholder={'address_3'}
        onChangeText={(value) => onChangeaddress_3(value)}
        style={styles.input}
      />
      <Text>City</Text>
 <TextInput
        placeholder={'city'}
        onChangeText={(value) => onChangecity(value)}
        style={styles.input}
      />
        <Text>State</Text>
 <TextInput
        placeholder={'State'}
        onChangeText={(value) => onChangestate(value)}
        style={styles.input}
      />
      <Text>Zipcode</Text>
      <TextInput
        placeholder={'zipcode'}
        onChangeText={(value) => onChangezipcode(value)}
        style={styles.input}
      />
      <Text>Phone</Text>
      <TextInput
        placeholder={'phone'}
        onChangeText={(value) => onChangephone(value)}
        style={styles.input}
      />
      <TouchableOpacity onPress={saveData}>
        <View style={{  padding: 10,backgroundColor:"green" }}>
         
          <Text>SaveData</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    overflow: "scroll"
  
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