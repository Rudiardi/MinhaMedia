import React from "react";

import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native"
 
export default function Bar(){
    return(
        <View>
            <Text>olá</Text>
        </View>
    )
}

/*
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faUser, faChartColumn } from '@fortawesome/free-solid-svg-icons';

export default function Bar( ){
    return(
        <View style={style.container}>
            <View style={style.iconBar}>
                <View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={ faHouse } style={style.icon} size = {30}/>
                    </TouchableOpacity>   
                </View>
                <View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={ faChartColumn } style={style.icon} size = {30}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={ faUser } style={style.icon} size = {30}/>
                    </TouchableOpacity>
                </View>
            </View>  
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        height:50,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        backgroundColor:"#2BA84A",
        justifyContent:"center"
    },
    icon:{
        color:"#FCFFFC",
    },
    iconBar:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    iconButton:{

    }
})
*/

