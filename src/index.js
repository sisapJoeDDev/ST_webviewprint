import React from 'react';
import { StyleSheet, Text, View } from "react-native";

import Results from './Results';

export default function App(){
    return(
        <View style={styles.container}>
            <Results/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },  
});