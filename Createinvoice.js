
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
export default function Createinvoice() {
  const [date, setDate] = useState(new Date())
  // const [open, setOpen] = useState(false)
  // const [date, setDate] = useState(new Date())
  const [user, setUser] = useState({
    //id: '',
    invoice_date: '',
    customer_id: '',
    po_number: '',
    ro_number: '',
    employee_name: ''
  });
  let data1 = [{
    value: 'Gene Messer Ford,6000 W. 19th St,Lubbock,TX',
  }, {
    value: 'Z - Spike Dykes Ford,1207 S Lynn Ave,Lamesa,TX',
  }, {
    value: 'All American Chevy Midland - L011,4100 W.Wall St.,Midland,TX',
  },
  {
    value: 'All American Chevy Odessa - 5020 North John Ben Shepperd Pky,Odessa,TX',
  }
];


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
  const onChangeemployee = (value) => {
    setUser({ ...user, employee_name: value });
  };
  const onChangelocation = (value) => {
    setUser({ ...user, customer_id: value });
  };
  const onChangeponumber = (value) => {
    setUser({ ...user, po_number: value });
  };
  const onChangeronumber = (value) => {
    setUser({ ...user, ro_number: value });
  };
  const onChangeinvoicedate = (value) => {
    setUser({ ...user, invoice_date: value });
  };
  const showAlert = () =>{
    Alert.alert(
       'Data Submited'
    )
 }

  async function saveData() {
       await fetch('https://lbkautospa.com/kryptos/k/createinvoiceapi.php', {
      method: 'POST',
      body: JSON.stringify(
        {
            invoice_date: user.invoice_date,

            customer_id: user.customer_id,

            po_number: user.po_number,

            ro_number: user.ro_number,

            employee_name: user.employee_name
        }
      ),
      headers: {

        'Content-Type': 'application/json'
      }

    });

  }
  return (

    <View style={styles.container}>
      <TextInput
        placeholder={'Name'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeemployee(value)}
        style={styles.input}
      />


      {/* <TextInput
        placeholder={'location'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangelocation(value)}
        style={styles.input}
      /> */}
      <Text>{user.customer_id}</Text>
      {/* <Text>{user.invoice_date}</Text> */}
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
            onChangelocation(item.value);
            setIsFocus(false);
          }}
         
        />
 {/* <Dropdown
        label='Location'
        data={data}
        onChangeText={(value) => onChangelocation(value)}
      /> */}
      
      <TextInput
        placeholder={'ponumber'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeponumber(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'ronumber'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeronumber(value)}
        style={styles.input}
      />
      {/* <Button title="calender" onPress={() => setOpen(true)} /> */}

{/* <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> */}
      <DatePicker date={date} textColor={"green"} onDateChange={(value)=>onChangeinvoicedate(value)} mode="date"/>

 {/* <TextInput
        placeholder={'invoicedate'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeinvoicedate(value)}
        style={styles.input}
      /> */}
      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'green', padding: 10 ,color:"red"}}>
          {/* <Text style={{ color: 'white', textAlign: 'center' }}>

            {loading ? 'loading...' : 'Create'}

          </Text> */}
          <Text style={{ color: 'white', textAlign: 'center'}}>Save</Text>
         {/* <Button title="Save" onPress={showAlert} color="green"/> */}

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
      borderColor: 'black',
      padding: 10,
      marginVertical: 5,
      color:'black'
  },

});

