import React,{useState} from "react";
import { View,Text ,StyleSheet,Button, TextInput,ScrollView, TouchableOpacity,ImageBackground} from "react-native";

const Invoiceread = ({navigation,route}) => {

    const [invoicelist, setinvoice] = useState([]);
  const[vin,setvin]=useState('');
    const getUserData =async (a) => {
  
      try {
        // await fetch('https://lbkautospa.com/kryptos/k/Bapi.php/?invoice_id='+a)
          // await fetch('https://lbkautospa.com/kryptos/k/Bapi.php/?invoice_id='+a)
           //await fetch('https://lbkautospa.com/kryptos/j/readapi.php/?invoice_id='+a)
           await fetch('https://lbkautospa.com/kryptos/j/readinvoice3.php/?invoice_id='+a)
      .then((response) => {
        return response.json();
      }).then(data=>{
  
        console.log(data)
        setinvoice(data);
        
      })
  
    }
       catch (error) {
        console.error(error);
      }
  
    };
  
   
  
    return (
      <ImageBackground source={require('./b.jpg')} resizeMode="cover" style={{flex:1}}>
      <View style={styles.contentView}>
    <TextInput onChangeText={(value)=>{setvin(value)}} style ={{ color:'black'}}placeholder="Enter Invoice Number" placeholderTextColor='black'/>
        <Button title=" Search Invoiceno"  onClick ={getUserData(vin)}color ="green" ></Button>
  <TouchableOpacity onPress={()=>navigation.navigate('Invoicedetail', {
        item: invoicelist
      })}>
        
        <View> 
          <Text style={{fontWeight:'bold'}}>INVOICE id</Text>
           <Text>{invoicelist.id}</Text>
           </View>
    <View> 
          <Text style={{fontWeight:'bold'}}>INVOICE DATE</Text>
           <Text>{invoicelist.invoice_date}</Text>
           </View>
        <View> 
          <Text style={{fontWeight:'bold'}}>INVOICE NO</Text>
           <Text>{invoicelist.invoice_id}</Text>
           </View>
           <View>
      <Text style={{fontWeight:'bold'}}>LOCATION
      </Text>
    <Text>{invoicelist.customer_name}</Text>
    </View>
       
  <View>
    <Text style={{fontWeight:'bold'}}>
      SERVICE NAME
    </Text>
    <Text>
      {invoicelist.service_name}
      </Text>
  </View>
   <View >
    <Text style={{fontWeight:'bold'}}>RONUMBER</Text>
   <Text>{invoicelist.ro_number}</Text>
   </View>
   <View> 
          <Text style={{fontWeight:'bold'}}>VIN</Text>
           <Text>{invoicelist.vin}</Text>
           </View>

           {/* <View >
    <Text style={{fontWeight:'bold'}}>po_number</Text>
   <Text>{invoicelist.po_number}</Text>
   </View> */}
   {/* <View >
    <Text style={{fontWeight:'bold'}}>ro_number</Text>
   <Text>{invoicelist.po_number}</Text>
   </View> */}
    <View>
      <Text style={{fontWeight:'bold'}}> INVOICE AMOUNT
      </Text>
    <Text>{invoicelist.item_amt}</Text>
    </View>
    
  </TouchableOpacity>
        
  
    {/* <View>
      <Text style={{fontWeight:'bold'}}>
      MODEL_YEAR
      </Text>
    <Text>{invoicelist.model_year}</Text>
    </View> */}
    </View>
    </ImageBackground>
      )
    }
  export default Invoiceread;

    const styles = StyleSheet.create({
        contentView: {
          flex: 1,
          // backgroundColor:'#13c2c2',
          overflow: "scroll"
        },
      });