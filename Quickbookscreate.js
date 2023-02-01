
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
  const [user, setUser] = useState({
    //id: '',
    invoice_date: '',
    customer_id: '',
    po_number: '',
    ro_number: '',
    employee_name: '',
     invoice_id:'',
    stock_number: '',
    service_id: '',
    vin: '',
    model_year: '',
    model: '',
    make: '',
    color: '',
    item_amt: ''
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
  { label: 'All American CDJ Midland - L124,3801 W Wall St,Midland', value: '29' },
  { label: 'All American CDJ Odessa - L121,2510 East 8th St.,Odessa', value: '25' },
  { label: 'All American CDJ San Angelo - L116,4310 Sherwood Way,San Angelo', value: '35' },
  { label: 'All American Chevy Midland - L011,4100 W.Wall St.,Midland', value: '21' },
  { label: 'All American Chevy Midland Body Shop - L011,4100 W.Wall St.,Midland', value: '45' },
  { label: 'All American Chevy Odessa - L026,5020 North John Ben Shepperd Pky,Odessa', value: '23' },
  { label: 'All American Dodge Midland Offsite - L124,3801 W Wall St,Midland', value: '46' },
  { label: 'Auto Nation Cadillac,7300 I-40 Frontage Rd.,Amarillo', value: '41' },
  { label: 'Auto Nation Chevrolet,2200 I-40 East,Amarillo', value: '24' },
  { label: 'Brown GMC,4300 S Georgia St,Amarillo', value: '40' },
  { label: 'Brown Honda,4200 S Georgia St #400,Amarillo', value: '39' },
  { label: 'Gene Messer Chevy,1302 S Loop 289 ,Lubbock', value: '5' },
  { label: 'Gene Messer Ford,6000 W. 19th St.,Lubbock', value: '1' },
  { label: 'Gene Messer Ford of Amarillo,3400 Soncy Rd.,Amarillo', value: '11' },
  { label: 'Gene Messer Hyundai,4025 W.Loop 289,Lubbock', value: '3' },
  { label: 'Gene Messer KIA,6000 W. 19th St.,Lubbock', value: '7' },
];

const data2 = [
  { label2: 'Customer Pay', value2: '4' },
  { label2: 'Plastic Mats', value2: '5' },
  { label2: 'Resistol', value2: '6' },
  { label2: 'Service Loaner', value2: '3' },
  { label2: 'BodyShop', value2: '13' },
  { label2: 'Demo', value2: '8' },
   { label2: 'Enterprise Unit', value2: '10' },
  { label2: 'Lincoln', value2: '14' },
  { label2: 'Lot Wash', value2: '17' },
   { label2: 'Reclean', value2: '7' },
  { label2: 'Service', value2: '12' },
  { label2: 'Sold ', value2: '2' },
  { label2: 'Stock Unit', value2: '1' },
   { label2: 'Wash & Wax', value2: '16' },
    { label2: 'Wash and Vac', value2: '9' },
     { label2: 'Wholesale Unit', value2: '11' },

];

const [value, setValue] = useState(null);

const [value2,setValue2]=useState(null);

const [isFocus, setIsFocus] = useState(false);
const onChangeinvoice = (value) => {
  setUser({ ...user, invoice_id: value });
};
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
  const onChangeamt = (value) => {
    setUser({ ...user, item_amt: value });
  };

  const showAlert = () =>{
    Alert.alert(
       'Data Submited'
    )
 }

  async function saveData() {
       await fetch('https://lbkautospa.com/kryptos/k/create.php', {
      method: 'POST',
      body: JSON.stringify(
        {
          invoice_id:user.invoice_id,
            invoice_date: user.invoice_date,
            customer_id: user.customer_id,
            po_number: user.po_number,
            ro_number: user.ro_number,
            employee_name: user.employee_name,
            stock_number: user.stock_number,
            service_id: user.service_id,
            vin: user.vin,
            model_year: user.model_year,
            model: user.model,
            make:user.make,
            color:user.color,
            item_amt:user.item_amt
        }
      ),
      headers: {

        'Content-Type': 'application/json'
      }

    });

  }

  async function saveData2() {
    await fetch('https://lbkautospa.com/kryptos/k/create.php', {
   method: 'POST',
   body: JSON.stringify(
     {
       invoice_id:user.invoice_id,
         invoice_date: user.invoice_date,
         customer_id: user.customer_id,
         po_number: user.po_number,
         ro_number: user.ro_number,
         employee_name: user.employee_name,
         stock_number: user.stock_number,
         service_id: user.service_id,
         vin: user.vin,
         model_year: user.model_year,
         model: user.model,
         make:user.make,
         color:user.color,
         item_amt:user.item_amt
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
        placeholder={'invoicenumber'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeinvoice(value)}
        style={styles.input}
      /> 
      <DatePicker date={date} textColor={"green"} onDateChange={(value)=>onChangeinvoicedate(value)} mode="date"/>
      <Dropdown
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Location' : '...'}
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
     
     <TextInput
        placeholder={'Employee Name'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangeemployee(value)}
        style={styles.input}
      />
<TextInput
        placeholder={'stock_number'}
        placeholderTextColor='green'
        onChangeText={(value) => onChangestock_number(value)}
        style={styles.input}
      />

        <Dropdown
      data={data2}
      search
      maxHeight={300}
      labelField="label2"
      valueField="value2"
      placeholder={!isFocus ? ' Service' : '...'}
      searchPlaceholder="Search..."
      value={value2}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue2(item.value2);
        onChangeservice_id(item.value2);
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
        placeholder={'year'}
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
      <TextInput

placeholder={'amount'}
placeholderTextColor='green'
onChangeText={(value) => onChangeamt(value)}

style={styles.input}

/>


 
      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'green', padding: 10 ,color:"red"}}>
          
          <Text style={{ color: 'white', textAlign: 'center'}}>Save</Text>
       
        </View>
      </TouchableOpacity>


      
      <TouchableOpacity onPress={saveData2}>
        <View style={{ backgroundColor: 'green', padding: 10 ,color:"red"}}>
          
          <Text style={{ color: 'white', textAlign: 'center'}}>quickbookSave</Text>
       
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

