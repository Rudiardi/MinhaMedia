import React, {useContext} from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

import {LineChart} from "react-native-chart-kit"

import {useFonts,Lexend_300Light} from '@expo-google-fonts/lexend';

import { AuthContext } from '../../contexts/auth'

export default function Graphs(){
  let [fontsLoaded] = useFonts({Lexend_300Light});
 
  const { media } = useContext (AuthContext)
  
  const data = {
    labels: ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],
            datasets: [
              {
                data: media
              }
            ]
  }
  
  if (!fontsLoaded){
      return null;
  } else {
  return(  
    <View style={styles.container}>
      <LineChart
          data={data}
          width={Dimensions.get("window").width}
          height={200}
          yAxisSuffix="km/l"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#fa2",
            backgroundGradientFrom: "#2BA84A",
            backgroundGradientTo:"#2AA248",
            decimalPlaces:1,
            color: (opacity = 1) => `rgba(252,255,252,${opacity})`,
            labelColor: (opacity = 1) => `rgba(252,255,252,${opacity})`,
            style:{
              borderRadius:15
            },
            propsForDots:{
              r:"3",
              strokeWidth:"2",
              stroke:"#FCFFFC"
            },
            propsForLabels:{
              fontFamily: "Lexend_300Light",
            }
          }}
          bezier
          style={{marginVertical:10,
          borderRadius:15}}
          withVerticalLines={false}
          yLabelsOffset={10}
          xLabelsOffset={1}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center',
  }
})
