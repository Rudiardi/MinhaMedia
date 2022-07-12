import react from "react";

import {
    View,
    Text,
    StyleSheet
} from "react-native"

export default function Bar(){
    return(
        <View style={style.container}>
            <Text>Barra de menus</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:"#35b",
        height:65,
        justifyContent:"center"
    }
})