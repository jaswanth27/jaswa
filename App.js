import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DCVBarcodeReader} from 'dynamsoft-capture-vision-react-native';
import Stacknavigation from './stacknavigator/Stacknavigation';

(async () => {
  // Initialize the license so that you can use full feature of the Barcode Reader module.
  await DCVBarcodeReader.initLicense(
    
    'DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxNTQ0MzE0LTEwMTU0NjgzOSIsIm1haW5TZXJ2ZXJVUkwiOiJodHRwczovL21sdHMuZHluYW1zb2Z0LmNvbS8iLCJvcmdhbml6YXRpb25JRCI6IjEwMTU0NDMxNCIsInN0YW5kYnlTZXJ2ZXJVUkwiOiJodHRwczovL3NsdHMuZHluYW1zb2Z0LmNvbS8iLCJjaGVja0NvZGUiOi0xMzE3MjQwMjE5fQ==',
  ).catch(e => {
    console.log(e);
  });
})();

function App() {
  return (
    <NavigationContainer>
      <Stacknavigation/>
    </NavigationContainer>
  );
}


export default App;
