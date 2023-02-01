import React, { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
Alert,
  TouchableOpacity,
  

} from 'react-native';


import { Dropdown } from 'react-native-element-dropdown';

export default function Createinvoiceitem() {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [value, setValue] = useState(null);
const [isFocus, setIsFocus] = useState(false);
  const [user, setUser] = useState({
    invoice_id:'',

    stock_number: '',

    service_id: '',

    vin: '',

    model_year: '',

    model: '',

    make: '',

    color: ''

  });
  const onChangeinvoice = (value) => {

    setUser({ ...user, invoice_id: value });

  };

  const onChangestock_number = (value) => {

    setUser({ ...user, stock_number: value });

  };



  const onChangeservice_id = (value) => {

    setUser({ ...user, service_id: value });

  };



  const onChangevin = (value) => {

    setUser({ ...user, vin: value });

  };



  const onChangemodel_year = (value) => {

    setUser({ ...user, model_year: value });

  };

  const onChangemodel = (value) => {

    setUser({ ...user, model: value });

  };



  const onChangemake = (value) => {

    setUser({ ...user, make: value });

  };

  const onChangecolor = (value) => {

    setUser({ ...user, color: value });

  };


  const showAlert = () =>{
    Alert.alert(
       'Data Submited'
    )
 }

  // const saveData = () => {

  //   setLoading(true);

  //   var myHeaders = new Headers();



  //   // myHeaders.append(

  //   //   'Authorization',

  //   //   'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'

  //   // );



  //   // myHeaders.append('Content-Type', 'application/json');



  //   fetch('http://localhost/restapidrop/api/create.php', {

  //     method: 'POST',

     

  //     body: JSON.stringify({

  //       name: user.name,

  //       location: user.location,

  //       ponumber: user.ponumber,

  //       ronumber: user.ronumber,

  //       invoicedate:user.invoicedate

  //     }),

  //   })

  //     .then((response) => {

       

  //       setLoading(false)

  //       response.text();

  //     })

  //     .then((result) => console.log(result))

  //     .catch((error) => console.log(error));

  // };



  async function saveData() {

   

   

       await fetch('https://lbkautospa.com/kryptos/k/createinvoiceitemapi.php', {

      method: 'POST',

      body: JSON.stringify(



        {
          invoice_id:user.invoice_id,

          stock_number: user.stock_number,

          service_id: user.service_id,

          vin: user.vin,

          model_year: user.model_year,

          model: user.model,

          make:user.make,

          color:user.color




        }

       

      ),

      headers: {

        'Content-Type': 'application/json'

      }

    });

    // const data = await response.json();

    // console.log(data);

  }

  return (

    <View style={styles.container}>

<TextInput

placeholder={'InvoiceNo'}
placeholderTextColor='green'

onChangeText={(value) => onChangeinvoice(value)}

style={styles.input}

/>

      <TextInput

        placeholder={'stock_number'}
        placeholderTextColor='green'

        onChangeText={(value) => onChangestock_number(value)}

        style={styles.input}

      />

      {/* <TextInput

        placeholder={'service_id'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeservice_id(value)}

        style={styles.input}

      /> */}
        <Dropdown
      
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        onChangeservice_id(item.value);
        setIsFocus(false);
      }}
     
    />

      <TextInput

        placeholder={'vin'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangevin(value)}

        style={styles.input}

      />

      <TextInput

        placeholder={'model_year'}
        placeholderTextColor='green'

        onChangeText={(value) => onChangemodel_year(value)}

        style={styles.input}

      />

 <TextInput

        placeholder={'model'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangemodel(value)}

        style={styles.input}

      />



<TextInput

        placeholder={'make'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangemake(value)}

        style={styles.input}

      />

<TextInput

        placeholder={'color'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangecolor(value)}

        style={styles.input}

      />



      <TouchableOpacity onPress={saveData} >

        <View style={{ backgroundColor: 'green', padding: 10 ,color:"red" }}>

   

        <Text style={{ color: 'white', textAlign: 'center'}}>Save</Text>

        </View>

      </TouchableOpacity>

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

   
    padding: 8,

    margin: 15,

  },

  input: {

    height: 40,

    borderWidth: 1,

    borderColor: '#ccc',

    padding: 10,

    marginVertical: 5,
color:"black"
  },

});