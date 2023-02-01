import React,{useState} from "react";
import { View,Text ,StyleSheet,Button, TextInput,ScrollView} from "react-native";

const Readinvoice = ({route}) => {

    const [invoicelist, setinvoice] = useState([]);
  const[vin,setvin]=useState('');
    const getUserData = async (a) => {
  
      try {
      
  
        await fetch('https://lbkautospa.com/kryptos/k/Viewinvoicevin.php/?vin='+a)
  
      .then((response) => {
        return response.json();
      }).then(data=>{
  
       console.log(data)
  
        const transformedinvoice =  {
          id:data.id,
          invoice_date:data.invoice_date,
          service_name:data.service_name,
          ro_number:data.ro_number,
          vin:data.vin,
          vehicle_desc:data.vehicle_desc,
          invoice_amt:data.invoice_amt,
          customer_name:data.customer_name,
        }
        //b(data.results);
  
        setinvoice(transformedinvoice);
        
      })
  
    }
       catch (error) {
        console.error(error);
      }
  
    };
  
   
  
    return (
      
      <View style={styles.contentView}>
    
       

    <TextInput onChangeText={(value)=>{setvin(value)}} style ={{ color:'black'}}placeholder="Enter Vin Number" placeholderTextColor='black'/>
        <Button title=" Search Vin"  color ="green" onClick={getUserData(vin)}></Button>
  
        <View> 
          <Text style={{fontWeight:'bold'}}>INVOICE Date</Text>
           <Text>{invoicelist.invoice_date}</Text>
           </View>
        <View> 
          <Text style={{fontWeight:'bold'}}>INVOICE NUMBER</Text>
           <Text>{invoicelist.id}</Text>
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
    <View>
      <Text style={{fontWeight:'bold'}}> INVOICE AMOUNT
      </Text>
    <Text>{invoicelist.invoice_amt}</Text>
    </View>
    
  
    {/* <View>
      <Text style={{fontWeight:'bold'}}>
      MODEL_YEAR
      </Text>
    <Text>{invoicelist.model_year}</Text>
    </View> */}
    </View>
    
      )
    }
  export default Readinvoice;

    const styles = StyleSheet.create({
        contentView: {
          flex: 1,
          backgroundColor:'#ADD8E6',
          overflow: "scroll"
        },
      });