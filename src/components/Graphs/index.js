import react from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

import {LineChart} from "react-native-chart-kit"


export default function Graphs(){
  return(
    <View>
      <LineChart
          data={{
            labels: ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],
            datasets: [
              {
                data: [
                  15,25,30,35,40,45
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisSuffix="km/l"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#fa2",
            backgroundGradientFrom: "#2BA84A",
            backgroundGradientTo:"#2AA248",
            decimalPlaces:2,
            color: (opacity = 1) => `rgba(252,255,252,${opacity})`,
            labelColor: (opacity = 1) => `rgba(252,255,252,${opacity})`,
            style:{
              borderRadius:15
            },
            propsForDots:{
              r:"3",
              strokeWidth:"2",
              stroke:"#FCFFFC"
            }
          }}
          bezier
          style={{marginVertical:10,
          borderRadius:15}}
      />
    </View>
  )
}