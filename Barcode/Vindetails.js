import React,{useState} from "react";
import { View,Text ,StyleSheet,Button,ImageBackground} from "react-native";
const Vindetails = ({route}) => {
    const [invoicelist, setinvoice] = useState([]);
    const getUserData = async (a) => {
      try {
        await fetch('https://lbkautospa.com/kryptos/k/barcodeapi.php/?vin='+a)
      .then((response) => {
        return response.json();
      }).then(data=>{
       console.log(data)
        const transformedinvoice =  {
        vin:data.vin,
        stock_number:data.stock_number,
        service_id:data.service_id,
        stock_number:data.stock_number,
        vehicle_desc:data.vehicle_desc,
        model_year:data.model_year,
        make:data.make,
        color:data.color,
        invoice_id:data.invoice_id,
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
      <ImageBackground source={require('./b.jpg')} resizeMode="cover" style={{flex:1}}>
      <View style={styles.contentView}>
        <Text style={{fontWeight:'bold'}}>VIN NUMBER :: {route.params.name}</Text>
        <Button title="Fetch" onClick={getUserData(route.params.name)} ></Button>
        <View> 
          <Text style={{fontWeight:'bold'}}>INVOICE NUMBER</Text>
           <Text>{invoicelist.invoice_id}</Text>
           </View>
        <View> 
          <Text style={{fontWeight:'bold'}}>VIN</Text>
           <Text>{invoicelist.vin}</Text>
           </View>
  <View>
    <Text style={{fontWeight:'bold'}}>
      STOCK NUMBER 
    </Text>
    <Text>
      {invoicelist.stock_number}
      </Text>
  </View>
   <View >
    <Text style={{fontWeight:'bold'}}>VEHICLE DESCRIPTIOIN</Text>
   <Text>{invoicelist.vehicle_desc}</Text>
   </View>
    <View>
      <Text style={{fontWeight:'bold'}}> COLOR
      </Text>
    <Text>{invoicelist.color}</Text>
    </View>
    <View>
      <Text style={{fontWeight:'bold'}}>MAKE
      </Text>
    <Text>{invoicelist.make}</Text>
    </View>
  
    <View>
      <Text style={{fontWeight:'bold'}}>
      MODEL_YEAR
      </Text>
    <Text>{invoicelist.model_year}</Text>
    </View>
    </View>
    </ImageBackground>
      )
    }
  export default Vindetails;

    const styles = StyleSheet.create({
        contentView: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          // backgroundColor:'#13c2c2',
          
        },
      });