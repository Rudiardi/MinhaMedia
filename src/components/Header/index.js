import React from "react";
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image
} from "react-native"
import {useFonts,DancingScript_700Bold} from '@expo-google-fonts/dancing-script';
import {
    Lexend_100Thin,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold} from '@expo-google-fonts/lexend';
//Função para identificar e padronizar o OS
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight+10 : 64;

export default function Header({title,name,model}){
    let [fontsLoaded] = useFonts({
        DancingScript_700Bold,
        Lexend_100Thin,
        Lexend_300Light
    });

    if (!fontsLoaded){
        return null;
    } else {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.personData}>
                    <View>
                        <Text style={styles.subtitle}>{name}</Text>
                        <Text style={styles.subtitle}>{model}</Text>
                    </View>
                    <View>
                        <Image style={styles.image} source={require("../../images/honda_moto.png")}/>  
                    </View>
                </View>
            </View>
        );
    } 
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2BA84A",
        paddingTop: statusBarHeight,
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:20,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        borderBottomColor:"#2D3A3A",
        elevation:25,
        flexDirection:"column"
    },
    content:{
        flex:1,
        alignItems:"center",
        flexDirection:"column",
        justifyContent: "flex-start",
        
    },
    title:{
        fontSize:40,
        color:"#FCFFFC",
        fontFamily: 'DancingScript_700Bold',
        justifyContent: "flex-start"
    },
    subtitle:{
        fontSize:16,
        color:"#FCFFFC",
        fontFamily:"Lexend_300Light",
    },
    image:{
        width:60,
        height:60,
        resizeMode:"center"
    },
    personData:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})