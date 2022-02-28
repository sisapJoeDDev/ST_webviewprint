import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import DOMParser from 'react-native-html-parser';

import NavigationView from './NavigationView';

var url = 'https://sisap-tour-servicios.vercel.app/results/3';
var x = fetch(url).then((resp)=>{
    return resp.text()
  }).then(
    (text)=>{           
      let html = text;           
      const parser = new DOMParser.DOMParser();
      const parsed = parser.parseFromString(html, 'text/html');
      // parsed.getElementsByAttribute('class', 'page2');   
      console.log(parsed.getElementsByAttribute('class', 'page2'));
      return "html"
    }
    );  

console.log(x);

const tour_web = 'https://sisap-tour-servicios.vercel.app/results/3';

const Results = () => (    
    <View style={styles.container}>
        <Text style={styles.textUp}>Service Analysis</Text>
        <WebView source={{ uri: tour_web }} />
        <NavigationView/>              
    </View>
);

const styles = {
    container: {
        flex: 1,
        marginTop: 60,
    },
    textUp: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,        
    },
};

export default Results;