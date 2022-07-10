import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput
}from "react-native"

export default function Contents(){
    return (
        <View style={styles.container}> 
            <View>
                <Text>Contents</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    card:{
        width:'90%',
        height:"20%"
    }
    
})

