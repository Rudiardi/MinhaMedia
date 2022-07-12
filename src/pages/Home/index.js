import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

import Header from '../../components/Header';
import Contents from "../../components/Contents";
import Graphs from '../../components/Graphs';
import Bar from '../../components/Bar';


export default function App (){
    return (
        <View style={styles.container}>
            <Header title="Minha Média" name="Rudiardi" model="Tornado 250cc"/>
            <Graphs/>
            <Contents />
            <Bar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EFFBF2",
        fontSize:25,
    },
})