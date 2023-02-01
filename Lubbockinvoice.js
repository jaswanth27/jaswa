
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
export default function Lubbockinvoice() {
  const [date, setDate] = useState(new Date())
  // const [open, setOpen] = useState(false)
  // const [date, setDate] = useState(new Date())
  const [user, setUser] = useState({
    //id: '',
    invoice_date: '',
    customer_id: '',
    po_number: '',
    ro_number: '',
    employee_name: '',
    // invoice_id:'',
    stock_number: '',
    service_id: '',
    vin: '',
    model_year: '',
    model: '',
    make: '',
    color: ''
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

  async function saveData() {
       await fetch('https://lbkautospa.com/kryptos/k/Invoiceapi.php', {
      method: 'POST',
      body: JSON.stringify(
        {
            invoice_date: user.invoice_date,
            customer_id: user.customer_id,
            po_number: user.po_number,
            ro_number: user.ro_number,
            employee_name: user.employee_name,
            // invoice_id:user.invoice_id,
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

  }
  return (
    <ScrollView>
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

placeholder={'InvoiceNo'}
placeholderTextColor='green'

onChangeText={(value) => onChangeinvoice(value)}

style={styles.input}

/> */}
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

