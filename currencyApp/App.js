import React,{useState} from 'react';
import {StyleSheet,ScrollView,Text,View,SafeAreaView,TextInput,TouchableOpacity,} from 'react-native';
import Snackbar from "react-native-snackbar";
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#1b262c"
},
resultContainer:{
height:70,
marginTop:40,
justifyContent:'center',
borderColor:"#bbe1fa",
borderWidth:2,
alignItems:'center'
},
resultValue:{
fontSize:30,
fontWeight:'bold',
color:'#FFF'
},
inputContainer:{
  height:70,
  marginTop:20,
  justifyContent:'center',
  borderColor:"#bbe1fa",
  borderWidth:2,
  alignItems:'center'
  
},
input:{
  fontSize:30,
  textAlign:'center',
  color:'#FFF'
},
convertButtonContanier:{
  flexDirection:"row",
  flexWrap:"wrap",
  marginTop:10,
  justifyContent:'space-around'
},
convertButton:{
  justifyContent:'center',
  alignItems:'center',
  height:100,
  width:"30%",
  borderColor:"#bbe1fa",
  borderWidth:2,
   marginTop:20,
   backgroundColor:"#0f4c75"
},
headingContainer:{
  height:70,
  marginTop:40,
  justifyContent:'center',
  alignItems:'center'
},
heading:{
  fontSize:30,
  fontWeight:"bold",
  color:"#FFF",
},
reset:{ 
  fontSize:30,
  backgroundColor:"#BB2CD9",
  paddingVertical:10,
  paddingHorizontal:40,
  color:"#FFFFFF",
  borderRadius:15,
  textTransform:"uppercase",
  marginTop:20
},
resetContainer:{
  alignItems : 'center',
  justifyContent:'center',
}
})

const currencyPerRupee = {
  DOLLAR : 0.014,
  EURO : 0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004,
}

const App = () => {

const [inputValue,setInputValue] = useState(0)
const [resultValue,setResultValue] = useState(0)

const buttonPressed = (currency) => {
   if(!inputValue){
  return  Snackbar.show({
    text:"Please enter a value",
    backgroundColor:"#EA7773",
    textColor:"#FFF",
  });

   }
 
  let result = parseFloat(inputValue) *currencyPerRupee[currency] 
  
  setResultValue(result.toFixed(5))

}

const reset = () => {
  if(!inputValue){
    return  Snackbar.show({
      text:"Please enter a value",
      backgroundColor:"#EA7773",
      textColor:"#FFF",
    });
  
     }
  setResultValue(0)
  setInputValue()
}

 return(
<>
<ScrollView  backgroundColor="#1b262c" keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic">
  

  <SafeAreaView  style={styles.container}>

  <View style={styles.headingContainer}>
    
    <Text style={styles.heading}>CURENCY CONVERTOR</Text>
    
    </View>

  <View style={styles.resultContainer}>
    
    <Text style={styles.resultValue}>{resultValue}</Text>
    
    </View>
    <View style={styles.inputContainer}>
    <TextInput style={styles.input}
      value={inputValue}
      keyboardType="numeric"         
      placeholder="Enter Value"
      placeholderTextColor="#c1c1c1"
      onChangeText={(inputValue)=>{
           setInputValue(inputValue)
      }}
      >
    
    </TextInput>
    
    </View>

    <View>
      <TouchableOpacity style={styles.resetContainer} onPress={reset} > 
             <Text style={styles.reset} >Reset</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.convertButtonContanier}>

    {
      Object.keys(currencyPerRupee).map((currency)=>(
            <TouchableOpacity key={currency} style={styles.convertButton}  onPress={() => {
              buttonPressed(currency)
            }} >
              <Text style={{color:'#FFF'}}>
               {currency}
              </Text>
            </TouchableOpacity>
      ))
    }

    </View>


  </SafeAreaView>
</ScrollView>
</>
  )
}

export default App;
