import React,{useState} from "react";
import { View,Text ,StyleSheet,Button, TextInput,ScrollView} from "react-native";

const Quickbooksread = ({route}) => {

    const [invoicelist, setinvoice] = useState([]);
  const[vin,setvin]=useState('');
    const getUserData = async (a) => {
  
      try {
        console.log(a)
  
        // await fetch('https://lbkautospa.com/kryptos/k/Bapi.php/?invoice_id='+a)
         await fetch('https://lbkautospa.com/kryptos/qb/qb/crud/Invoice/Read.php/?invoiceid='+a)
  
      .then((response) => {
       
        return response.json();
        
      }).then(data=>{
  
       console.log(data)
  
        const transformedinvoice =  {
         
         
          DocNumber:data.invoice.DocNumber,
          ponumber:data.invoice.CustomField[0].StringValue,
          ronumber:data.invoice.CustomField[1].StringValue,
          employeename:data.invoice.CustomField[2].StringValue,
          invoiceamt:data.invoice.TotalAmt,
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
    
       

    <TextInput onChangeText={(value)=>{setvin(value)}} style ={{ color:'black'}}placeholder="Enter quickbook Number" placeholderTextColor='black'/>
        <Button title=" Search Id"  color ="green" onClick={getUserData(vin)}></Button>

     <View >
    <Text style={{fontWeight:'bold'}}>Invoiceno</Text>
   <Text>{invoicelist.DocNumber}</Text>
   </View>
   <View >
    <Text style={{fontWeight:'bold'}}>PONUMBER</Text>
   <Text>{invoicelist.ponumber}</Text>
   </View>
     <View >
    <Text style={{fontWeight:'bold'}}>RONUMBER</Text>
   <Text>{invoicelist.ronumber}</Text>
   </View>
   <View >
    <Text style={{fontWeight:'bold'}}>employeename</Text>
   <Text>{invoicelist.employeename}</Text>
   </View>
   <View >
    <Text style={{fontWeight:'bold'}}>TotalAmt</Text>
   <Text>{invoicelist.TotalAmt}</Text>
   </View>
  
    </View>
    
      )
    }
  export default Quickbooksread;

    const styles = StyleSheet.create({
        contentView: {
          flex: 1,
          backgroundColor:'#ADD8E6',
          overflow: "scroll"
        },
      });