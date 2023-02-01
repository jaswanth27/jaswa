import  React  from 'react';
import { View,Button,StyleSheet,ImageBackground } from 'react-native';
function HomeScreen({navigation}) {
    return (
      <ImageBackground source={require('./invoice/b.jpg')} resizeMode="cover" style={{flex:1}}>
      <View style={styles.contentView}>
        <Button
          title="Start Scanning"
          onPress={() => navigation.navigate('Barcode')}
          color="green"
        />
      </View>
      </ImageBackground>
    );
  }
  export default HomeScreen;
  const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      // backgroundColor:'white'
      //ADD8E6
      //#246EE9
       //#2D2343
    },
  });