import  React  from 'react';
import { View,Button,StyleSheet,Text } from 'react-native';
function Updateinvoice() {
    return (
      <View style={styles.contentView}>
       <Text>update</Text>
      </View>
    );
  }
  export default Updateinvoice

  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor:'#ADD8E6'
    },
  });