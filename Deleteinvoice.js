import  React  from 'react';
import { View,Button,StyleSheet ,Text} from 'react-native';
function Deleteinvoice() {
    return (
      <View style={styles.contentView}>
       <Text>Delete</Text>
      </View>
    );
  }
  export default Deleteinvoice

  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor:'#ADD8E6'
    },
  });