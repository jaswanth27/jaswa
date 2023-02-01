import  React  from 'react';
import { View,Button,StyleSheet } from 'react-native';
function Quickbooks({navigation}) {
    return (
      <View style={styles.contentView}>
        <Button
          title="Quickbooksread"
          onPress={() => navigation.navigate('Quickbooksread')}
          color="green"
        />
         {/* <Button
          title="createquickbook"
          onPress={() => navigation.navigate('Quickbookscreate')}
          color="green"
        />
           <Button
          title="Quickbooksread"
          onPress={() => navigation.navigate('Quickbooksread')}
          color="green"
        /> */}

      </View>
    );
  }
  export default Quickbooks;
  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor:'#ADD8E6'
    },
  });