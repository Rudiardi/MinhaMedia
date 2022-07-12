import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
}from "react-native"

import {useFonts,DancingScript_700Bold} from '@expo-google-fonts/dancing-script';

import {
    Lexend_100Thin,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold} from '@expo-google-fonts/lexend';

import SwitchSelector from "react-native-switch-selector";

const options = [
    {label:"Total",value:1},
    {label:"Parcial",value:2}
];

export default function Contents(){
    
        let [fontsLoaded] = useFonts({
            DancingScript_700Bold,
            Lexend_100Thin,
            Lexend_300Light,
            Lexend_400Regular,
            Lexend_500Medium,
            Lexend_600SemiBold,
            Lexend_700Bold,
            Lexend_800ExtraBold
        });

        if (!fontsLoaded){
            return null;
        } else {
            return(
                <View style={styles.container}> 
                    <View style={styles.blocOne}>
                        <View style={styles.title}>
                            <Text style={styles.text}>Abastecimento</Text>
                        </View>
                    <View style={styles.blocTwo}>
                        <View style={styles.switch}>
                            <SwitchSelector
                                options={options}
                                initial={1} 
                                buttonColor="#2BA84A"
                                borderColor="#FCFFFC"
                                />
                        </View>
                        <View style={styles.inputs}>
                            <TextInput keyboardType= "decimal-pad" multiline={false}>KM </TextInput>
                        </View>
                        <View style={styles.inputs}>
                            <TextInput keyboardType= "decimal-pad">R$ </TextInput>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.botao}>
                                <Text>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                        </View>    
                    </View>
                </View>
            )
        }    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2BA84A",
        height:400
    },
    text:{
        color:"#FCFFFC",
        fontFamily:'DancingScript_700Bold',
        fontSize:25
    },
    blocOne:{
        flexDirection:"column",
        justifyContent:"flex-start",
    },
    switch:{
        width:140,
        height:20
    },
    inputs:{
        backgroundColor:"#FCFFFC",
        borderRadius:15,
        width:240,
        height:40,
        paddingStart:15,
        justifyContent:"center",
        fontFamily:"Lexend_400Regular"
    },
    blocTwo:{
        flexDirection:"column",
        justifyContent:"space-around",
        height:370,
        alignItems:"center"
    },
    title:{
        justifyContent:"flex-start"
    },
    botao:{
        backgroundColor:"#FCFFFC",
        width:240,
        height:40,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        borderRadius:15,
        fontFamily:"Lexend_400Regular"
    }

})

