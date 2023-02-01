import React from 'react';

import { Text, View ,Button} from 'react-native';
 function Quickbooks({navigation})
{
    return(
        <View>

<Button
          title="d"
          onPress={() => navigation.navigate('Detail')}
          color="green"
        />
        <Button
          title="get"
          onPress={() => navigation.navigate('Get')}
          color="green"
        />
        <Button
          title="p"
          onPress={() => navigation.navigate('Post')}
          color="green"
        />
                <Text>quickbooks</Text>

        </View>
    )
}
export default Quickbooks