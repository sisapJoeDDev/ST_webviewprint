import React from 'react';
import { View, TouchableOpacity, Text, Pressable } from 'react-native';
import * as Print from 'expo-print';


const print = async () => {
    let url = 'https://sisap-tour-servicios.vercel.app/results/3';
    
    fetch(url).then((resp)=>{
      return resp.text()
    }).then(
      (text)=>{     
        let html = text;
        console.log(html);
        Print.printAsync({
          html,
        });
      }
      );  
  }

const NavigationView = () => (
    <View>
        <Pressable style={styles.button} onPress={print}>
            <Text style={styles.buttonTitle} >Print Results</Text>
        </Pressable>            
    </View>
);

const styles = {
    container: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button:{
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 20,
    },
};

export default NavigationView;