//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
// create a component
const Invoicedetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [date, setDate] = useState(new Date())

  const [user, setUser] = useState({
    id:item.id,
    customer_id: item.customer_id,
    invoice_date: item.invoice_date,
    po_number: item.po_number,
    ro_number: item.ro_number,
    employee_name: item.ro_number,
     invoice_id:item.invoice_id,
    stock_number: item.stock_number,
    service_id: item.service_id,
    vin: item.vin,
    model_year: item.model_year,
    model: item.model,
    make: item.make,
    color: item.color,
    item_amt: item.item_amt
  });
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
  const onChangeid= (value) => {
    setUser({ ...user, id: value });
  };
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
  const updateData = () => {
     fetch('https://lbkautospa.com/kryptos/j/updatesapi.php/?id='+user.id, {
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
  const deleteData = () => {
    // gender: user.gender,
    // fetch('https://gorest.co.in/public-api/users/'+item.id,
      fetch('https://lbkautospa.com/kryptos/j/delete.php/?id='+user.id)
      // , {
      //   method: 'POST',
      //   body: JSON.stringify(
      //     {
      //       invoice_id: item.invoice_id, 
      //     }
      //   ),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });

  }
  return (
    <ScrollView>
       <ImageBackground source={require('./b.jpg')} resizeMode="cover" style={{flex:1}}>
    <View style={styles.container}>
       <TextInput
       value={user.id}
        placeholder={'invoiceid'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangeid(value)}
        style={styles.input}
      /> 
       <TextInput
       value={user.invoice_id}
        placeholder={'invoicenumber'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangeinvoice(value)}
        style={styles.input}
      /> 
      <DatePicker date={date} textColor={"black"} onDateChange={(value)=>onChangeinvoicedate(value)} mode="date"/>
      <Dropdown
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Location' : '...'}
          searchPlaceholder="Search..."
          // value={value}
          value={user.customer_id}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            onChangelocation(item.value);
            setIsFocus(false);
          }}
        />
      <TextInput
       value={user.po_number}
        placeholder={'ponumber'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangeponumber(value)}
        style={styles.input}
      />
      <TextInput
       value={user.ro_number}
        placeholder={'ronumber'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangeronumber(value)}
        style={styles.input}
      />
     
     <TextInput
      value={user.employee_name}
        placeholder={'Employee Name'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangeemployee(value)}
        style={styles.input}
      />
<TextInput
 value={user.stock_number}
        placeholder={'stock_number'}
        placeholderTextColor='black'
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
      // value={value2}
      value={user.service_id}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue2(item.value2);
        onChangeservice_id(item.value2);
        setIsFocus(false);
      }}
    />
      
<TextInput
 value={user.vin}
        placeholder={'vin'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangevin(value)}
        style={styles.input}
      />

      <TextInput
       value={user.year}
        placeholder={'year'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangemodel_year(value)}
        style={styles.input}
      />

     <TextInput
      value={user.model}
        placeholder={'model'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangemodel(value)}
        style={styles.input}
      />
     <TextInput
        value={user.make}
        placeholder={'make'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangemake(value)}
        style={styles.input}
      />
<TextInput
 value={user.color}
        placeholder={'color'}
        placeholderTextColor='black'
        onChangeText={(value) => onChangecolor(value)}
        style={styles.input}
      />
      <TextInput
 value={user.item_amt}
placeholder={'amount'}
placeholderTextColor='black'
onChangeText={(value) => onChangeamt(value)}
style={styles.input}
/>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: 'blue', padding:10}}>
            <Text style={{ color: 'white', textAlign: 'center' }}>UPDATE</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'red',padding:10}}>
            <Text style={{ color: 'white', textAlign: 'center' }}>DELETE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
 </ImageBackground>
     </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    // backgroundColor:'#13c2c2',
    overflow:"scroll"
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    color: 'black'
  },
});

//make this component available to the app
export default Invoicedetail;
